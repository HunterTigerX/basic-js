const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let secretName = "";
  if (members === null 
  || members === "" 
  || typeof members === 'number'
  || members === false 
  || members === undefined  
  ) {
    return false
  } else {
for (let i = 0; i < members.length; i++) {
  if (typeof members[i] !== 'string') {} else {
  let trimmed = members[i].replace(/\s/g, '');
  secretName += trimmed[0];
}}}
return secretName.toUpperCase().split("").sort().join("");
}

module.exports = {
  createDreamTeam
};
