import { Configuration, Key, Value } from "./configuration";
import { range } from "./functions";

export class Generator {
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    values(key: Key) {
        /** Keys are short keys and the values are css values. */
        const values: Map<string, string> = new Map();

        /** The order is inheritance and then defined values. */

        const value = (v: Value) => {
            if (typeof v === "string") {
                return v;
            } else {
                /** That means this is a range configuration. */
                const items = range(v.start, v.repeat, v.step, s => {
                    return (v.prefix || "") + s + (v.suffix || "");
                }, v.dirty);

                return items;
            }
        };

        key.options?.inherit?.forEach(i => {
            const inherit = this.configuration.predefined[i];

            if (!inherit) {
                throw new Error(`Inheritance key ${i} does not exist.`);
            }

            Object.entries(inherit).forEach(([k, v]) => {
                const _ = value(v);

                if (typeof _ === "string") {
                    values.set(k, _);
                } else {
                    _.forEach(v => {
                        values.set(v.name, v.value);
                    });
                }
            });
        });

        if (key.values) {
            Object.entries(key.values).forEach(([k, v]) => {
                const _ = value(v);

                if (typeof _ === "string") {
                    values.set(k, _);
                } else {
                    _.forEach(v => {
                        values.set(v.name, v.value);
                    });
                }
            });
        }

        return values;
    }

    generate() {
        const items: {
            name: string;
            property: string;
            value: string;
        }[] = [];

        this.configuration.keys.forEach((key, k) => {
            const values = this.values(key);

            values.forEach((value, name) => {
                const exists = items.find(i => i.name === key.short && i.property === key.short);

                if (exists) {
                    console.warn(`Duplicate key ${key.short} found. Previously defined property was ${exists.property}.`);
                }

                items.push({
                    name: this.configuration.prefix + key.short + this.configuration.seperator + name + this.configuration.suffix,
                    property: key.name,
                    value
                });
            });
        });

        return items;
    }
}