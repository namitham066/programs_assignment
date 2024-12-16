// 24.  Write a function to sort an array without using built-in methods.
let num =[1,4,6,3,64,2,42,24]

function sorting(num){
    let n= num.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n-1;j++){
            if(num[j]>num[j+1]){
                let temp = num[j]
                num[j]=num[j+1]
                num[j+1]=temp
            }

        }
    }
    return num
}
let sorted = sorting(num)
console.log('sorted array is', sorted);

