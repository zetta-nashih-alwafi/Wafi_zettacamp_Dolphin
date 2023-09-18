
/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!



 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */

let x = "hai"
console.log(x);


function majorityElement(nums) {
  const setNums = new Set(nums)
  let majorElement = 0, majorElementAmount = 0, findElement = 0

  for (const num of setNums) {
    nums.forEach((element) =>{
      if (num === element) {
        findElement ++
      }
    })

    if (findElement > majorElementAmount) {
      majorElementAmount = findElement
      majorElement = num
    }
    findElement = 0
  }
  return majorElement;
}

console.log(majorityElement([1, 2, "i", "a", "i", 1]));

for (let index = 0; index < 10; index++) {
  console.log(index);
  
}
  
  // console.log(majorityElement([1, 2, 1, 2, 3]));

// console.log(majorityElement([[3, 2], [3, 7], [3, 2]])); // Output: 3 
// console.log(majorityElement([2, 2, 1, 1, 1, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5])); // Output: 2 

// let start = performance.now()
// majorityElement([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 4, 6])
// let end = performance.now()

// console.log(end-start);