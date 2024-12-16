// 26. Write a function to convert a string from snake_case to camelCase.

function snakeToCamel(snakeStr) {
    let result = '';
    let capitalizeNext = false;
  
    for (let i = 0; i < snakeStr.length; i++) {
      if (snakeStr[i] === '_') {
        capitalizeNext = true; 
      } else {
        if (capitalizeNext) {
          result += snakeStr[i].toUpperCase();
          capitalizeNext = false;
        } else {
          result += snakeStr[i];
        }
      }
    }
  
    return result;
  }
  

  console.log(snakeToCamel("hello_world"));
  