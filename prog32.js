// 32. Write a function to reverse a string without using built-in methods.
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    
    return reversed;  
  }
  let input = "hello";
  let reversedString = reverseString(input);
  console.log(reversedString);  
  