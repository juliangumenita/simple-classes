import fs from 'fs';
import { Generator } from '../src/generator';
import { Configuration } from '../src/configuration';

const generator = new Generator(Configuration);

const items = generator.generate();

const string = items.map(i => {
    return `.${i.name.replace(/[:%?]/g, '\\$&')}{${i.property}:${i.value};}`;
}).join("");

console.log(`Generated ${items.length} items`);

fs.writeFileSync("dist/simple.min.css", string);