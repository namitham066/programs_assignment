// 8.  Write a function to find the maximum number in an array.
let num = [1,2,3,4,5,6,7,8]
let max =0
for(let i=0; i<=num.length; i++){
    if (num[i]> max){
        max = num[i]
    }
}
console.log("max number is =>",max);
