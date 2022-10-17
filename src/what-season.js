const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  let dateParsed = Date.parse(date);
  if (date === undefined) { return `Unable to determine the time of year!`}
  else if (typeof date !== 'object' || Object.getOwnPropertyNames(date).length > 0) {
    throw Error("Invalid date!")
   }
   else if (Number.isNaN(dateParsed) === true) {
     return `Unable to determine the time of year!`
   } else {

    let thisMonth = date.getMonth();
    let currentTime = new Date();
    currentTime.setTime()
    if (thisMonth >= 2 && thisMonth <= 4) {
          return "spring"
        } else if (thisMonth >= 5 && thisMonth <= 7) {
          return "summer"
        } else if (thisMonth >= 8 && thisMonth <= 10) {
          return "autumn"
        } else if (thisMonth >= 11 || thisMonth <= 1) {
          return "winter"
        }
}
}

module.exports = {
  getSeason
};
