/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Input Format =>
A single line of five space-separated integers.

Sample Input
1 2 3 4 5
7 69 2 221 8974

Sample Output
10 14
299 9271
*/

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  /* For HackerRank 
  console.log((sum - max) + " " + (sum - min));
  */
  return (sum - max) + " " + (sum - min);
}

/* Test Function Plus Minus */
console.log(miniMaxSum([1, 2, 3, 4, 5]));
console.log(miniMaxSum([7, 69, 2, 221, 8974]));
