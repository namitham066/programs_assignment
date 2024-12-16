// 6. Write a function to check if a given string is a palindrome.

function palindrome(str){
    for(let i=0; i<str.length/2;i++){
        if( str[i] !== str[str.length-1-i]){
            return false
        }

        
    }
    return true
}
console.log(palindrome("hello"));
console.log(palindrome("madam"));

