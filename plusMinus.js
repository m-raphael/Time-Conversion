/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Input Format =>
The first line contains an integer, , the size of the array. 
The second line contains  space-separated integers that describe .

Sample Input
6
-4 3 -9 0 4 1

Sample Output
0.500000
0.333333
0.166667
*/

function plusMinus(arr) {
    let positiveNumbers = arr.filter(number => number > 0).length / arr.length;
    let negativeNumbers = arr.filter(number => number < 0).length / arr.length;
    let zeroNumbers = arr.filter(number => number == 0).length / arr.length;

    return (positiveNumbers.toFixed(6) + "\n" + negativeNumbers.toFixed(6) + "\n" + zeroNumbers.toFixed(6))
 
}

/* Test Function Plus Minus */
console.log(plusMinus([6]));
console.log(plusMinus([-4,3,-9,0,4,1]));
