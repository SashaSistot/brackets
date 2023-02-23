module.exports = function check(str, bracketsConfig) {
  let flag = (str.length % 2 !== 0) ? false : (checkBracketsInStr(str.split(''), bracketsConfig));
  return flag;
}

function checkBracketsInStr(arr, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {

    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {

      let equalBrackets = arr.filter(element => (element === bracketsConfig[i][0]));
      bracketsConfig.splice(i, 1);
      if (equalBrackets.length % 2 !== 0) return false;
      
    }
  
  }
  let currentBrackets = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (arr[j] === bracketsConfig[i][0]) currentBrackets++;
      if (arr[j] === bracketsConfig[i][1]) currentBrackets--;
      if (currentBrackets < 0) return false;
    }
  }
  if (currentBrackets !== 0) return false;
  return true;
}
