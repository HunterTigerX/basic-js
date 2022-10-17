const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      if (i === 0) {
        count += Number(matrix[i][y]) 
      } else if (i > 0) {
        if (matrix[i-1][y] === 0) {
        } else {
          count += Number(matrix[i][y]) 
        }
      }
    }
  } return count
}


module.exports = {
  getMatrixElementsSum
};
