// 16. Write a program to remove the middle element from an array, or if the middle element is not there, remove every element except the first and last ones.
function Element(arr) {
   
    if (arr.length <= 2) {
      return arr;
    }
    if (arr.length % 2 !== 0) {
      arr.splice(Math.floor(arr.length / 2), 1);
    } else {
      arr = [arr[0], arr[arr.length - 1]];
    }
  
    return arr;
  }
  
 
  console.log(Element([1, 2, 3, 4, 5]));  
  console.log(Element([1, 2, 3, 4]));     
  console.log(Element([10, 20]));          
  console.log(Element([1]));               
  