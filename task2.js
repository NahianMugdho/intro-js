// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

var m1 = 75.25;
var m2 = 65;
var m3 = 80;
var m4 = 35.45;
var m5 = 99.50;
avg=(m1+m2+m3+m4+m5)/5;

console.log(avg.toFixed(2));