{
  let flag = (str.length % 2 !== 0) ? false : (checkBracketsInStr(str.split(''), bracketsConfig));
  return flag;
}

function checkBracketsInStr(arr, bracketsConfig) {

  for (let i = 0; i < bracketsConfig.length; i++) {
    
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {

      let equalBrackets = arr.filter(element => (element === bracketsConfig[i][0]));
      bracketsConfig.splice(i, 1);
      if (equalBrackets.length % 2 !== 0) return false;
      
    };
  };

  let stack = [];

  for (i = 0; i < arr.length; i++) {
    
    for (j = 0; j < bracketsConfig.length; j++) {
      
      if (arr[i] === bracketsConfig[j][0]) {
        
        stack.push(arr[i]);
        
      };
      if (arr[i] === bracketsConfig[j][1] && stack.length === 0) {
        
        return false;
        
      };
      if (arr[i] === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0]) {
        
        stack.pop();
        
      };
    };
  };
  if (stack.length !== 0) return false;
  return true;
};
