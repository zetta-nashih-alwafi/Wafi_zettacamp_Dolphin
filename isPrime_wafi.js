/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
let start
let end

function isPrime(n) {
  if (n < 2 || n %1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// let array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
for (let i = 0; i < 100; i++) {
  console.log(i + '-' + isPrime(i))
}

console.log(isPrime(169));
console.log(isPrime(43));

start = performance.now()
isPrime(1000000000000000001)
end = performance.now()
console.log(`Execution time: ${end - start}`);