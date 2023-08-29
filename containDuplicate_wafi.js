
/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */

// function hasUniqueCharacters(str) {
//   // Your logic here
//   return str.length === new Set(str).size;
// }

function containDuplicate(nums) {
    // Your logic here
    const numMap = new Map();
    for (const num of nums) {
      if (numMap.has(JSON.stringify(num))) {
        return true
      }
      numMap.set(JSON.stringify(num), 'hai')
    }
    return false
  }

  console.log(containDuplicate([[1, 2], [1, 2, 3], [1, 2, 3, 4]]));
  console.log(containDuplicate([[1, 2], [1, 2, 3], [1, 2]]));
  console.log(containDuplicate([1, 2, 3, 4, 1]));
  console.log(containDuplicate([1, 2, 'i', 4, 'i']));