'use strict';

const myNewTestCase = require('..');
const assert = require('assert').strict;

assert.strictEqual(myNewTestCase(), 'Hello from myNewTestCase');
console.info('myNewTestCase tests passed');
