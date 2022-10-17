const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let num = n.toString().split("");
  let nCopy1 = [...num];
  let nCopy2 = [...num];
  let nCopy3 = [...num]
  let maxNum = 0;
  for (let i = 0; i < num.length; i++) {
    if (i === 0) {
      nCopy1.pop();
         maxNum = Number(nCopy1.join(""))
    } else if (i === num.length-1) {
            nCopy2.shift();
            if (Number(nCopy2.join("")) > maxNum) {
              maxNum = Number(nCopy2.join(""))
            }
    } else if (i > 0 && i < num.length-1) {
  
            let spliced = nCopy3.splice(i, 1).flat(Infinity);
            if (Number(nCopy3.join("") > maxNum)) {
              maxNum = Number(nCopy3.join(""))
              nCopy3.splice(i, 0, spliced).flat(Infinity).join("")
            }
            else {
              nCopy3.splice(i, 0, spliced)
            } 
    }
  } return (maxNum)
}


module.exports = {
  deleteDigit
};
