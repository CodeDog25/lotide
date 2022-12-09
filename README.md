# lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @xisha/lotide`

**Require it:**

`const _ = require('@xisha/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(): returns the first item in an array.
* tail(): returns everything but the first item in an array.
* middle: returns the middle item in an array, if it's length is an even number returns the 2 mid items.
* countLetters(): countLetters returns an object with a count of all instences of a letter in a string.
* eqArrays(): compares two arrays for equality.
* countOnly(): counts all instances of a provided value in an array.
* eqObject: compares two objects for equality.
* findKey(): returns first key where argument is a match to value.
* flatten(): flattens an array of arrays into one array
* letterPosition(): returns object with indexes of each letter in a given string.
* map(): takes 2 arguments, array to map, callback function and returns a new array with the applied callback function.
* takeUntil(): takes array and returns new array untill call back is satisfied.
* without(): compare arrays and print elements in first array that do not appear in second.