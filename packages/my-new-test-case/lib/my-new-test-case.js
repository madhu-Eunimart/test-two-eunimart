'use strict';
import HelloWorld from "../src/dist";
module.exports = myNewTestCase;

function myNewTestCase() {
  HelloWorld()
  return 'Hello from myNewTestCase';
}
