import fs from 'fs';
import util from "util";
import { Generator } from '../src/generator';
import { Configuration } from '../src/configuration';

const generator = new Generator(Configuration);

const items = generator.generate();

console.log(util.inspect(items, false, null, true));

const string = items.map(i => {
    return `.${i.name.replace(/[:%?]/g, '\\$&')}{${i.property}:${i.value};}`;
}).join("");

fs.writeFileSync("dist/simple.min.css", string);