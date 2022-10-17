const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {

  let additionSeparatorsArray = [];
  let result = [];
  let text = str;
  let separator = options.separator;  
  let repeatTimes = options.repeatTimes;
  let addition = options.addition;
  let additionSeparator = options.additionSeparator; 
  let additionSeparators = options.additionRepeatTimes;
  console.log(addition)
  if (separator === undefined) {
    separator = "+";
  } else {
    separator = String(separator)
  }
  
  
  if (repeatTimes === undefined) {
    repeatTimes = "1";
  } else {
    repeatTimes = String(repeatTimes)
  }
  
  
  if (addition === undefined) {
    addition = "";
  } else {
    addition = String(addition)
  }
  
  
  if (additionSeparator === undefined) {
    additionSeparator = "|";
  } else {
    additionSeparator = String(additionSeparator)
  }
  
  
  if (additionSeparators === undefined) {
    additionSeparators = "1";
  } else {
    additionSeparators = String(additionSeparators)
  }
  
  
  console.log(addition)
  
  
  for (let i = 0; i < additionSeparators; i++) {
  if (i === additionSeparators-1) {
    additionSeparatorsArray.push(addition)
  } else {
    additionSeparatorsArray.push(`${addition}${additionSeparator}`)
  }}
  
  let additionSeparatorsArrayJoined = additionSeparatorsArray.join("");
  console.log(additionSeparatorsArrayJoined)
  for (let i = 0; i < repeatTimes; i++) {
  if (i === repeatTimes-1) {
    result.push(`${text}${additionSeparatorsArrayJoined}`)
  } 
   else {
    result.push(`${text}${additionSeparatorsArrayJoined}${separator}`)
  }
  }console.log(result.join(""))
  return(result.join(""))
}

module.exports = {
  repeater
};
