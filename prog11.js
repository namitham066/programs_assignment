// 11. Write a function to count repeated characters in a string and print in a string format. 

function countRepeatedCharacters(str) {
    let count = {}; 
    let result = ""; 
  
    
    for (let char of str) {
      count[char] = (count[char] || 0) + 1;
    }
    for (let char in count) {
      if (count[char] > 1) {
        result += char + ": " + count[char] + ", ";
      }
    }

    return result.slice(0, -2);
  }
  

  console.log(countRepeatedCharacters("hello"));       
  
  