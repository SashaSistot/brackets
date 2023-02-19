module.exports = function check(str, bracketsConfig) {
  let flag = (str.length % 2 !== 0) ? false : (checkBracketsInStr(str.split(''), bracketsConfig));
  return flag;
}

function checkBracketsInStr(arr, bracketsConfig) {
for (i = 0; i < bracketsConfig.length; i++) {

  if (bracketsConfig[i][0] == bracketsConfig[i][1]) {

    let equalBrackets = arr.filter(element => (element === bracketsConfig[i][0]));
    if (equalBrackets.length % 2 !== 0) return false;

  } else {

    let differentBrackets = arr.filter(element => (element === bracketsConfig[i][0] || element === bracketsConfig[i][1]));

    if (differentBrackets.length % 2 !== 0) return false;
    let currentBracket = 0;
    for(let j = 0; j < differentBrackets.length; j++) {
      
     if (differentBrackets[j] === bracketsConfig[i][0]) {

      currentBracket++;

     } else if (differentBrackets[j] === bracketsConfig[i][1] && differentBrackets[j - 1] === bracketsConfig[i][0]) {

      currentBracket--;
      differentBrackets.splice(j - 1, 2);
      j = j - 2;

     } else {

      currentBracket++;

     }
    }
    if (currentBracket > 0) return false
  }
}
  return true;
}
