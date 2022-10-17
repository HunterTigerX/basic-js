const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let splitted = s1.split("");
  let splitted2 = s2.split("");
function isUniq1(x, pos) {
  for (let i = 0; i < splitted2.length; i++) {
    if (x === splitted2[i]) {
      splitted2.splice(i, 1);
      count++;
      break
  }
}
}
for (let i = 0; i < splitted.length; i++) {
  isUniq1(splitted[i], i)
  } 
   return count
}

module.exports = {
  getCommonCharacterCount
};
