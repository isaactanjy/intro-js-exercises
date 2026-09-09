/* globals _ */
/* eslint no-unused-vars:off */

/* =====================
# Exercise: Iterators

A core part of data manipulation in JavaScript is looping over values in an
array and performing some operations on those values. In this exercise we will
practice some of the most common types of iterative operations.

Functions that `return` can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function which counts the number of times a value occurs in an array
Example: countItem(['a', 'b', 'a'], 'a') should return 2
===================== */
/*
let countItem = (arr, item) => {
  return arr.filter(x => x === item).length
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the even items. Copy your definition of isEven from part 1; your
  filterEven function MUST use the isEven function and MUST NOT change the
  original array.
===================== */
/*
let isEven = (n) => {
   return (n % 2 === 0)
};
let filterEven = (arr) => {
  return arr.filter(n => isEven(n))
};

console.log('filterEven success:', _(filterEven([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 4, 4, 4]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the odd items. Copy your definition of isOdd from part 1; your filterOdd
  function MUST use the isOdd function and MUST NOT change the original array.
===================== */
/*
let isOdd = (n) => {
  return (n % 2 !== 0)
};
let filterOdd = (arr) => {
  return arr.filter(n => isOdd(n))
};

console.log('filterOdd success:', _(filterOdd([1, 2, 3, 4, 5, 4, 4])).isEqual([1, 3, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item incremented. Copy your definition of plusOne from part 1; your
  mapIncrement function MUST use the plusOne function and MUST NOT change the
  original array.
===================== */
/*
let plusOne = (n) => {
  return (++n)
};
let mapIncrement = (arr) => {
  return arr.map(n => plusOne(n)) // always remember to put the variable AFTER the function within the ()
};

console.log('mapIncrement success:', _(mapIncrement([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 3, 4, 5, 6, 5, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item tripled. Copy your definition of timesThree from part 1; your
  mapTriple function MUST use the timesThree function and MUST NOT change the
  original array.
===================== */
/*
let timesThree = (n) => {
   return (n * 3)
};
let mapTriple = (arr) => {
  return arr.map(n => timesThree(n))
};

console.log('mapTriple success:', _(mapTriple([1, 2, 3, 4, 5, 4, 4])).isEqual([3, 6, 9, 12, 15, 12, 12]));

/* =====================
Instructions: Write a function which takes an array and returns the sum of all
  the items in the array. Copy your definition of add from part 1; your
  reduceSum function MUST use the add function and MUST NOT change the original
  array.
===================== */
/*
let add = (n1, n2) => {
  return (n1 + n2)
};
let reduceSum = (arr) => {
  return arr.reduce(add) // make sure you are using the right function
};

console.log('reduceSum success:', reduceSum([1, 2, 3, 4, 5, 4, 4]) === 23);

/* =====================
Instructions: Write a function which takes an array and returns the product of
  all the items in the array. Copy your definition of multiply from part 1; your
  reduceProduct function MUST use the multiply function and MUST NOT change the
  original array.
===================== */
/*
let multiply = (n1, n2) => {
  return (n1 * n2)
};
let reduceProduct = (arr) => {
  return arr.reduce(multiply)
};

console.log('reduceProduct success:', reduceProduct([1, 2, 3, 4, 5, 4, 4]) === 1920);

/*================

Trying again without using the advanced functions

/* =====================
Instructions: Write a function which counts the number of times a value occurs in an array
Example: countItem(['a', 'b', 'a'], 'a') should return 2
===================== */

let countItem = (arr, item) => {
  let count = 0;
  for (const currentItem of arr) {
    if (currentItem === item) {
      count++;
    }
  }
  return count;
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the even items. Copy your definition of isEven from part 1; your
  filterEven function MUST use the isEven function and MUST NOT change the
  original array.
===================== */

let isEven = (n) => {
   return (n % 2 === 0);
};
let filterEven = (arr) => {
  const evenArr = []; // set it as empty first. This allows a return even if nothing fits your criteria.
  for (const item of arr) {
    if (isEven(item)) {
      evenArr.push(item);
    }
  }
  return evenArr;
};

console.log('filterEven success:', _(filterEven([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 4, 4, 4]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the odd items. Copy your definition of isOdd from part 1; your filterOdd
  function MUST use the isOdd function and MUST NOT change the original array.
===================== */

let isOdd = (n) => {
  return (n % 2 !== 0);
};
let filterOdd = (arr) => {
  const oddArr = [];
  for (const item of arr) { // when you don't care about the index
    if (isOdd(item)) {
      oddArr.push(item);
    }
  }
  return oddArr;
};

console.log('filterOdd success:', _(filterOdd([1, 2, 3, 4, 5, 4, 4])).isEqual([1, 3, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item incremented. Copy your definition of plusOne from part 1; your
  mapIncrement function MUST use the plusOne function and MUST NOT change the
  original array.

  We are going to map all of the items on a new array and add an increment to it
===================== */

let plusOne = (n) => {
  return (++n);
};
let mapIncrement = (arr) => {
  const incArr = [];
  for (const item of arr) {
    incArr.push(plusOne(item));
  }
  return incArr;
};

console.log('mapIncrement success:', _(mapIncrement([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 3, 4, 5, 6, 5, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item tripled. Copy your definition of timesThree from part 1; your
  mapTriple function MUST use the timesThree function and MUST NOT change the
  original array.
===================== */

let timesThree = (n) => {
   return (n * 3);
};
let mapTriple = (arr) => {
  const triArr = [];
  for (const item of arr) {
    triArr.push(timesThree(item));
  }
  return triArr;
};

console.log('mapTriple success:', _(mapTriple([1, 2, 3, 4, 5, 4, 4])).isEqual([3, 6, 9, 12, 15, 12, 12]));

/* =====================
Instructions: Write a function which takes an array and returns the sum of all
  the items in the array. Copy your definition of add from part 1; your
  reduceSum function MUST use the add function and MUST NOT change the original
  array.
===================== */

let add = (n1, n2) => {
  return (n1 + n2);
};
let reduceSum = (arr) => {
  let sum = 0; // let instead of const here because you expect to change it
  for (const item of arr) {
    sum = add(sum, item);
  }
  return sum;
};

console.log('reduceSum success:', reduceSum([1, 2, 3, 4, 5, 4, 4]) === 23);

/* =====================
Instructions: Write a function which takes an array and returns the product of
  all the items in the array. Copy your definition of multiply from part 1; your
  reduceProduct function MUST use the multiply function and MUST NOT change the
  original array.
===================== */

let multiply = (n1, n2) => {
  return (n1 * n2);
};
let reduceProduct = (arr) => {
  let prod = 1; // note that this CANNOT be 0 as you are multiplying against it. It works for sum, but not for prod. Use 1 here.
  for (const item of arr) {
    prod = multiply(prod, item);
  }
  return prod;
};

console.log('reduceProduct success:', reduceProduct([1, 2, 3, 4, 5, 4, 4]) === 1920);