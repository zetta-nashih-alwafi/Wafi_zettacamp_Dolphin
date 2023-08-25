/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

// function hasUniqueCharacters(str) {
//   // Your logic here
//   const strLc = str.toLowerCase()
//   const arrStr = strLc.split('')
//   for (let i=0; i<arrStr.length; i++) {
//     if (arrStr.includes(arrStr[i], i+1)) {
//       return false
//     } else {
//     return true
//     }
//   }
// }

// function hasUniqueCharacters(str) {
//   // Your logic here
//   // str = String(str)
//   // str = JSON.stringify(str)
//   if (typeof(str) == 'string') {
//     str = str.toLocaleLowerCase()
//     for (let i=0; i<str.length; i++) {
//       if (str.includes(str.charAt(i), i+1)) {
//         return false
//       }
//     }
//     return true
//   } else {
//     return "Please enter a string"
//   }
// }

console.log(hasUniqueCharacters('heLlo'))

start = performance.now()
hasUniqueCharacters('hello')
end = performance.now()
console.log(end + "-" + start);
console.log(`Execution Time is: ${end - start}`);


function hasUniqueCharacters(str) {
  // Your logic here
  return str.length === new Set(str).size;
}
console.log(hasUniqueCharacters('he world'))