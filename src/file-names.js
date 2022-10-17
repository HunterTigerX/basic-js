const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  let sortedArray = [];
  let count = 0;
  let tempName;

  function checkRepeat(documentName) {
    count++;
    if (
      sortedArray.includes(`${documentName}`) &&
      sortedArray.includes(`${documentName}(${count})`)
    ) {
      count++;
      tempName = `${documentName}(${count})`;
      checkRepeat(tempName);
    } else if (
      sortedArray.includes(`${documentName}`) &&
      !sortedArray.includes(`${documentName}(${count})`)
    ) {
      sortedArray.push(`${documentName}(${count})`);
      count = 0;
    } else {
      sortedArray.push(`${documentName}`);
      count = 0;
    }
  }

  for (let i = 0; i < names.length; i++) {
    if (sortedArray.includes(names[i])) {
      tempName = `${names[i]}`;
      checkRepeat(`${names[i]}`);
    } else {
      sortedArray.push(names[i]);
    }
  }
  return sortedArray;
}

module.exports = {
  renameFiles,
};
