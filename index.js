// Import stylesheets
import './style.css';

// Write Javascript code!
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// Here's the code to solve the problem in JavaScript:
function miniMaxSum(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log(`${sum - max} ${sum - min}`);
}

// Let's go through the code step by step:
// function miniMaxSum(arr): This defines a function named miniMaxSum that takes an array arr as its parameter.
// let sum = arr.reduce((acc, curr) => acc + curr, 0);: This calculates the sum of all the elements in the array using the reduce method. The reduce method takes a function as its first parameter, which is called on each element of the array to reduce it to a single value. In this case, the function adds the current element to the accumulated sum (acc). The second parameter to the reduce method is the initial value of the accumulator, which is set to 0 in this case.
// let min = Math.min(...arr);: This finds the minimum value in the array using the Math.min method, which takes a variable number of arguments. The ... syntax (called the "spread" operator) is used to "spread" the array elements into individual arguments to the Math.min method.
// let max = Math.max(...arr);: This finds the maximum value in the array using the Math.max method, which works similarly to the Math.min method.
// console.log(${sum - max} ${sum - min});: This prints the minimum and maximum values that can be calculated by summing exactly four of the five integers. To do this, we subtract the maximum value from the sum of all the values to get the minimum possible sum, and subtract the minimum value from the sum to get the maximum possible sum. The values are printed as a single line of two space-separated long integers using string interpolation (${...}).

// Using a loop to find the minimum and maximum values:
/*function miniMaxSum(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(`${sum - max} ${sum - min}`);
}
*/
