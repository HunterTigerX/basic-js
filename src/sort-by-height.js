const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let sortedCopy = [...arr];
  let sorted = sortedCopy.sort(function compareNumbers(a, b) {
    return a - b;
  });
  let superSorted = [];
  for (let i = 0; i < sorted.length; i++) {
if (sorted[i] < 0) {} else {
  superSorted.push(sorted[i])
}
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      console.log(arr[i])
      result.push(-1)
    } else {
      console.log(arr[i])
      let d = superSorted.shift();
      result.push(d)
    }
  } return result
}


module.exports = {
  sortByHeight
};
