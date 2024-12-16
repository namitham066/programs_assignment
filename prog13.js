// 13. Write a JavaScript code to extract numbers between two characters in a string and add them all.

function sumNumbersBetweenChars(str, char1, char2) {
    let sum = 0; // 
    let isBetween = false; 
    let num = ""; // 
  
    for (let char of str) {
      if (char === char1) {
        isBetween = true; 
        num = "";
      } else if (char === char2) {
        isBetween = false; 
        if (num) {
          sum += parseInt(num); 
          num = ""; // 
        }
      } else if (isBetween && !isNaN(char)) {
        num += char; 
      }
    }
  
    return sum; 
  }
  
  
  console.log(sumNumbersBetweenChars("a3b5c21a12bg", "a", "b")); 
  