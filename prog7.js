// 7. Write a function to remove duplicate elements from an array without using default functions.


let num =[1,2,3,2,2,4,56,56,5]
console.log("original array", num);

function duplicate(array){
let data = []
for(let i=0;i<array.length;i++){
        if(!data.includes(array[i])){
            data.push(array[i])
        }
}
return data
}
let result = duplicate(num)
console.log('array without duplicates', result);