const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],
  count: 0,
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    this.count = this.count + 1;
    return this;
  },
  removeLink(position) {
    let testArray = [];
    for (let i = 1; i <= this.count; i++) {
      testArray.push(i)
    }
    if (testArray.includes(position)) {
      this.result.splice(position - 1, 1);
      this.count = this.count - 1;
      return this;

    } else {
      this.result = [];
      this.count = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    result = this.result.join("~~");
    this.result = [];
    this.count = 0;
    console.log(this.result);
    return result;
  },
};

module.exports = {
  chainMaker,
};
