const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if (isNaN(sampleActivity) === true || typeof sampleActivity === 'number' || typeof sampleActivity === 'object' 
  || sampleActivity <= 0)  {
    return false
   } else {
   let k = 0.693/HALF_LIFE_PERIOD;
   let N = MODERN_ACTIVITY/sampleActivity;
   let t = Math.log(N)/k;
   if (Math.ceil(t) <= 0 || MODERN_ACTIVITY/sampleActivity === 'NaN') {return false}
  return Math.ceil(t);
 }
}

module.exports = {
  dateSample
};
