'use strict';
import HelloWorld from "../src";
module.exports = myNewTestCase;

function myNewTestCase() {
  HelloWorld()
  return 'Hello from myNewTestCase';
}
