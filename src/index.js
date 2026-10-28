import os from 'node:os';
import { greet } from './lib/greet.js';

console.log(greet('Fabio'));
console.log(`Running on host: ${os.hostname()}`);
