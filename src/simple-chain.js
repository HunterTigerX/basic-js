const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
   getLength() {
    throw new NotImplementedError('Not implemented');
    return this.count;
  },
   addLink(value) {
    throw new NotImplementedError('Not implemented');
    this.count = this.count += 1;
    if (!("chain" in chainMaker)) {
      this.count = 1;
      chainMaker.chain = "";
      chainMaker.chain = chainMaker.chain + `~( ${value} )~`;
    } else {
      chainMaker.chain = chainMaker.chain + `~( ${value} )~`;
    }
    return this;
  },
   removeLink(position) {
    throw new NotImplementedError('Not implemented');
    if (!("chain" in chainMaker)) {

    } else if (position > chainMaker.count || position <= 0) {
      throw Error("You can't remove incorrect link!");
    } else {
      this.count = this.count--;
      let bracketsCount = 0,
        start = 0,
        end = 0;
      for (let i = 0; i < chainMaker.chain.split("").length; i++) {
        if (chainMaker.chain[i] === "(" && chainMaker.chain[i-1] === "~") {
          bracketsCount++;
          if (bracketsCount === position) {
            start = i - 1;
          }
        }
        if (chainMaker.chain[i] === ")" && chainMaker.chain[i+1] === "~") {
          if (bracketsCount === position) {
            end = i + 2;
            console.log(chainMaker.chain)
            chainMaker.chain =
              chainMaker.chain.split("").splice(0, start).join("") +
              chainMaker.chain
                .split("")
                .splice(end, chainMaker.chain.length - 1)
                .join("");
            i = chainMaker.chain.split("").length;
            console.log(chainMaker.chain)
          }
        }
      }
      return this;
    }
  },
   reverseChain() {
    throw new NotImplementedError('Not implemented');
    if (!("chain" in chainMaker)) {
      return this;
    } else {
      let newChain = [];
      let start, end;
      for (let i = 0; i < chainMaker.chain.split("").length; i++) {
        if (chainMaker.chain[i] === "("  && chainMaker.chain[i-1] === "~") {
          start = i - 1;
        } else if (chainMaker.chain[i] === ")"  && chainMaker.chain[i+1] === "~") {
          end = i + 2;
          newChain.unshift(
            chainMaker.chain.split("").join("").slice(start, end)
          );
          start = 0;
          end = 0;
        }
      }
      chainMaker.chain = newChain.join("");
      return this;
    }
  },
   finishChain() {
    throw new NotImplementedError('Not implemented');
    let result = chainMaker.chain;
    delete chainMaker.chain;
    delete chainMaker.count;
    result = result.split("");
    result.splice(0, 1);
    result.splice(result.length - 1, 1);
    result = result.join("");
    //    throw
    console.log(result)
    return result;
  },
};

module.exports = {
  chainMaker
};
