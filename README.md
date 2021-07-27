# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install y.abdulla/lotide`

**Require it:**

`const _ = require('y.abdulla/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Takes in an array and returns the first item in the array

* `middle`: Takes in an array and returns the middle element(s) of the array

* `tail`: Takes in an array and returns the entire array aside from the first item of the array

* `assertArraysEqual`: Determines whether 2 arrays are equal and print's whether they are equal or not in the console

* `assertEqual`: Determines whether two values are equal (does not work for objects or arrays)

* `assertObjectsEqual`: Determines whether 2 objects are equal or not. Returns passed if they are equal and returns failed if they are not equal.

 * `countLetters`: Takes in a string and returns how many times each unique letter in the string has occurred.

 * `countOnly`: Takes in an array of items and an object containing which items to count, and returns the items that are contained within the array and how many times they have occurred.

 * `eqArrays`: Compares two arrays and determines if they are equal or not. Returns true if they are equal and returns false if they are not equal.

 * `eqObjects`: Compares two objects and determines whether they are equal or not. Returns true if they are equal and returns false if they are not equal.

 * `findKey`: Takes in an object and a condition and finds the key that best matches this.

 * `findKeyByValue`: Takes in an object and a value, and uses them to find a key that best matches them.

 * `letterPositions`: Takes in a string and determines the index(es) of each unique character in the string.

 * `map`: Takes in an array and a condition (callback function ) and creates a new array based on the condition
