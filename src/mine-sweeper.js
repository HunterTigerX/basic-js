const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let currentPositionX = 0;
  let currentNumber = 0;
  let newSubArray = [];
  let result = [];

  function checkLineUpAndDown(line) {
    if (line == null) {
    } else {
      if (line[currentPositionX - 1] === true) {
        currentNumber++;
      }
      if (line[currentPositionX] === true) {
        currentNumber++;
      }
      if (line[currentPositionX + 1] === true) {
        currentNumber++;
      }
    }
  }

  function checkLineMiddle(line) {
    if (line == null) {
    } else {
      if (line[currentPositionX - 1] === true) {
        currentNumber++;
      }
      if (line[currentPositionX + 1] === true) {
        currentNumber++;
      }
    }
  }

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      currentPositionX = x;
      checkLineUpAndDown(matrix[y - 1]);
      checkLineUpAndDown(matrix[y + 1]);
      checkLineMiddle(matrix[y]);
      newSubArray.push(currentNumber);
      currentNumber = 0;
    }
    result.push(newSubArray);
    newSubArray = [];
  }
  return result;
}

module.exports = {
  minesweeper
};
