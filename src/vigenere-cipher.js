const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(value, key) {
    if (value == null || key == null) {
      throw Error("Incorrect arguments!");
    }
    if (key.length < value.length) {
      for (let i = 0; i < value.length; i++) {
        key = key += key[i];
      }
    } else if (key.length > value.length) {
      for (let i = 0; key.length > value.length; i++) {
        key = key
          .split("")
          .splice(0, key.length - 1)
          .join("");
      }
    }

    if (this.mode === false) {
      let result = [];
      let y = 0;
      value = value.split("").reverse().join("");
      for (let i = 0; i < value.length; i++) {
        let letterOne = value[i].toUpperCase().charCodeAt(0) - 64;
        if (letterOne <= 26 && letterOne > 0) {
          let letterTwo = key[y].toUpperCase().charCodeAt(0) - 64;
          let letterThree;
          if (letterOne + letterTwo - 1 > 26) {
            letterThree = String.fromCharCode(
              letterOne + letterTwo - 26 - 1 + 64
            );
            y++;
            result.push(letterThree);
          } else {
            letterThree = String.fromCharCode(letterOne + letterTwo - 1 + 64);
            y++;
            result.push(letterThree);
          }
        } else if (letterOne <= 0 || letterOne > 26) {
          result.push(value[i]);
        }
      }
      return result.reverse().join("");
    } else {
      let result = [];
      let y = 0;
      for (let i = 0; i < value.length; i++) {
        let letterOne = value[i].toUpperCase().charCodeAt(0) - 64;
        if (letterOne <= 26 && letterOne > 0) {
          let letterTwo = key[y].toUpperCase().charCodeAt(0) - 64;
          let letterThree;
          if (letterOne + letterTwo - 1 > 26) {
            letterThree = String.fromCharCode(
              letterOne + letterTwo - 26 - 1 + 64
            );
            y++;
            result.push(letterThree);
          } else {
            letterThree = String.fromCharCode(letterOne + letterTwo - 1 + 64);
            y++;
            result.push(letterThree);
          }
        } else if (letterOne <= 0 || letterOne > 26) {
          result.push(value[i]);
        }
      }
      return result.join("");
    }
  }

  decrypt(value, key) {
    if (value == null || key == null) {
      throw Error("Incorrect arguments!");
    }
    if (key.length < value.length) {
      for (let i = 0; i < value.length; i++) {
        key = key += key[i];
      }
    } else if (key.length > value.length) {
      for (let i = 0; key.length > value.length; i++) {
        key = key
          .split("")
          .splice(0, key.length - 1)
          .join("");
      }
    }
    let result = [];
    let y = 0;
    for (let i = 0; i < value.length; i++) {
      let targetLetter = value[i].toUpperCase().charCodeAt(0) - 64;
      let keyPosition = key[y].toUpperCase().charCodeAt(0) - 64;
      let position = targetLetter;
      let count = 0;
      if (targetLetter <= 26 && targetLetter > 0) {
        y++;
        for (let i = 1; position !== keyPosition; i++) {
          if (keyPosition === 26) {
            count++;
            keyPosition = 1;
          } else {
            count++;
            keyPosition++;
            if (keyPosition === 26 && position !== 26) {
              keyPosition = 1;
              count++;
            }
          }
        }
        result.push(String.fromCharCode(count + 1 + 64));
      } else {
        result.push(value[i]);
      }
    }

    if (this.mode === false) {
      return result.join("");
    } else {
      return result.join("");
    }
  }
}







module.exports = {
  VigenereCipheringMachine,
};
