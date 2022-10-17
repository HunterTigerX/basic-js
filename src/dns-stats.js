const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let result = {};

  for (let i = 0; i < domains.length; i++) {
    let currentChecked;
    let reversedArray = domains[i].split(".").reverse();
    for (let x = 0; x < reversedArray.length; x++) {
      console.log(
        result.hasOwnProperty(currentChecked),
        result,
        currentChecked
      );
      if (x === 0) {
        currentChecked = `.${reversedArray[x]}`;
        if (result.hasOwnProperty(currentChecked)) {
          result[currentChecked] = result[currentChecked] + 1;
        } else {
          result[currentChecked] = 1;
        }
      } else {
        currentChecked += `.${reversedArray[x]}`;
        if (result.hasOwnProperty(currentChecked)) {
          result[currentChecked] = result[currentChecked] + 1;
        } else {
          result[currentChecked] = 1;
        }
      }
    }
  }
  return (result);
}
module.exports = {
  getDNSStats
};
