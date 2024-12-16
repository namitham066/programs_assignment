// 20.  Find the length of the longest substring without repeating characters
function longestSubstringLength(str) {
    let maxLength = 0;
    let currentSubstring = '';
  
    for (let i = 0; i < str.length; i++) {
      if (currentSubstring.indexOf(str[i]) === -1) {
        currentSubstring += str[i]; 
      } else {
        maxLength = Math.max(maxLength, currentSubstring.length); 
        currentSubstring = currentSubstring.slice(currentSubstring.indexOf(str[i]) + 1) + str[i]; 
      }
    }
    
    return Math.max(maxLength, currentSubstring.length); 
  }
  
 
  console.log(longestSubstringLength("abcabcbb")); 
  console.log(longestSubstringLength("bbbbba"));    
  console.log(longestSubstringLength("pwwkewwsd"));   
  