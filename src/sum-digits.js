const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let splitted = n.toString().split("");
  function calc(x) {
    let temp = 0;
    for (let i = 0; i < x.length; i++) { 
      if (i === x.length-1) {
        temp += Number(splitted[i]);
        splitted = temp.toString().split("");
      } else {
      temp += Number(splitted[i]);
  }}
}
while (splitted.length !== 1) {
    calc(splitted)
  }   return Number(splitted)
}

module.exports = {
  getSumOfDigits
};
