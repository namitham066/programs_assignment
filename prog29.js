// 29.Write a function to capitalize the first letter of each word in an array of strings.
function capitalize(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  }
  
  
  console.log(capitalize(["hello", "world", "javascript"]));  

 
 