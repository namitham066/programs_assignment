// Count the occurrences of each unique character in the string
function char(str) {
    console.log("Testing string: " + str);  
    
    let count = {};
  
    for (let char of str) {
      count[char] = (count[char] || 0) + 1;
    }
  
    return count;
  }
  

  console.log(char("hello"));  
  