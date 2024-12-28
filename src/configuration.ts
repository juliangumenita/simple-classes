export interface Range {
    start: number;
    repeat: number;
    step?: number;
    suffix?: string;
    prefix?: string;
    dirty?: boolean;
}

export type Value = string | Range;

export interface Values {
    [key: string]: Value;
}

export interface Key {
    short: string;
    name: string;
    values?: Values;
    options?: {
        inherit?: string[]
    }
}

export interface Configuration {
    prefix: string;
    suffix: string;
    seperator: string;
    predefined: {
        [key: string]: Values;
    }
    keys: Key[]
}

export const Configuration: Configuration = {
    prefix: "",
    suffix: "",
    seperator: ":",
    predefined: {
        general: {
            a: "auto",
            n: "none",
            u: "unset",
            i: "initial",
        },
        numbers: {
            _: {
                start: 1,
                repeat: 26
            }
        },
        pixels: {
            _: {
                start: 0,
                repeat: 26,
                step: 4,
                suffix: "px"
            }
        },
        percentages: {
            _: {
                start: 0,
                repeat: 26,
                step: 4,
                suffix: "%",
                dirty: true
            }
        }
    },
    keys: [
        {
            short: "d",
            name: "display",
            values: {
                b: "block",
                i: "inline",
                ib: "inline-block",
                f: "flex",
                if: "inline-flex",
            },
            options: {
                inherit: ["general"]
            }
        },
        {
            short: "p",
            name: "position",
            values: {
                r: "relative",
                a: "absolute",
                f: "fixed",
                s: "sticky",
            },
        },
        {
            short: "t",
            name: "top",
            options: {
                inherit: ["pixels", "percentages"]
            }
        },
        {
            short: "r",
            name: "right",
            options: {
                inherit: ["pixels", "percentages"]
            }
        },
        {
            short: "b",
            name: "left",
            options: {
                inherit: ["pixels", "percentages"]
            }
        },
        {
            short: "l",
            name: "left",
            options: {
                inherit: ["pixels", "percentages"]
            }
        },
        {
            short: "z",
            name: "z-index",
            options: {
                inherit: ["numbers"]
            }
        },
        {
            short: "f",
            name: "flex",
            options: {
                inherit: ["numbers"]
            }
        },
        {
            short: "o",
            name: "overflow",
            values: {
                v: "visible",
                h: "hidden",
                s: "scroll",
            }
        },
        {
            short: "ox",
            name: "overflow-x",
            values: {
                v: "visible",
                h: "hidden",
                s: "scroll",
            }
        },
        {
            short: "oy",
            name: "overflow-y",
            values: {
                v: "visible",
                h: "hidden",
                s: "scroll",
            }
        },
        {
            short: "mt",
            name: "margin-top",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "mr",
            name: "margin-right",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "mb",
            name: "margin-bottom",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "ml",
            name: "margin-left",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "m",
            name: "margin",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "pt",
            name: "padding-top",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "pr",
            name: "padding-right",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "pb",
            name: "padding-bottom",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "pl",
            name: "padding-left",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "p",
            name: "padding",
            options: {
                inherit: ["general", "pixels", "percentages"]
            }
        },
        {
            short: "br",
            name: "border-radius",
            options: {
                inherit: ["pixels"]
            }
        },
        {
            short: "fs",
            name: "font-size",
            options: {
                inherit: ["pixels"]
            }
        },
        {
            short: "fw",
            name: "font-weight",
            values: {
                n: "normal",
                b: "bold",
                l: "lighter",
                h: "heavy",
            }
        },
        {
            short: "fs",
            name: "font-style",
            values: {
                n: "normal",
                i: "italic",
                o: "oblique",
            }
        },
        {
            short: "lh",
            name: "line-height",
            options: {
                inherit: ["pixels"]
            }
        },
        {
            short: "ta",
            name: "text-align",
            values: {
                l: "left",
                r: "right",
                c: "center",
                j: "justify",
            }
        },
        {
            short: "td",
            name: "text-decoration",
            values: {
                n: "none",
                u: "underline",
                o: "overline",
                l: "line-through",
            }
        },
        {
            short: "ws",
            name: "white-space",
            values: {
                n: "normal",
                p: "pre",
                nw: "nowrap",
                pw: "pre-wrap",
                pl: "pre-line",
            }
        },
        {
            short: "fd",
            name: "flex-direction",
            values: {
                r: "row",
                rr: "row-reverse",
                c: "column",
                cr: "column-reverse",
            }
        },
        {
            short: "fw",
            name: "flex-wrap",
            values: {
                n: "nowrap",
                w: "wrap",
                wr: "wrap-reverse",
            }
        },
        {
            short: "a",
            name: "align-items",
            values: {
                s: "stretch",
                f: "flex-start",
                c: "center",
                e: "flex-end",
                b: "baseline",
            }
        },
        {
            short: "j",
            name: "justify-content",
            values: {
                s: "flex-start",
                c: "center",
                e: "flex-end",
                b: "space-between",
                a: "space-around",
            }
        },
        {
            short: "mw",
            name: "min-width",
            options: {
                inherit: ["pixels", "percentages"]
            }
        },
        {
            name: "mxw",
            short: "max-width",
            options: {
                inherit: ["pixels", "percentages"]
            }
        },
        {
            short: "mh",
            name: "min-height",
            options: {
                inherit: ["pixels", "percentages"]
            }
        },
        {
            name: "mxh",
            short: "max-height",
            options: {
                inherit: ["pixels", "percentages"]
            }
        },
        {
            short: "o",
            name: "opacity",
            values: {
                _: {
                    start: 0,
                    repeat: 11,
                    step: 0.1
                }
            }
        }
    ]
};