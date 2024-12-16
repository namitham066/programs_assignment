// 30. Write a function to calculate the sum of total marks in an array of objects.
function Marks(arr) {
    return arr.reduce((sum, obj) => sum + obj.marks, 0);
  }
  
  const students = [
    { name: "jack", marks: 10 },
    { name: "Bob", marks: 20 },
    { name: "Charlie", marks: 20 }
  ];
  
  console.log(Marks(students)); 
  

 