//Test Cases
const head = require('../head.js');
const assertEqual = require('../assertEqual')

assertEqual(head([5,6,7]), 4);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Helo");
assertEqual(head([5,6,7]), 5);
assertEqual(head([8]), 8);
assertEqual(head([]), 4);