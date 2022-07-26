// // #1 Array String Length:-

// // Given an array of strings print the length of each string

// array = ["apple", "windows", "ubuntu"]

// var res = array.map(function (elem) {
//     return elem.length
// });
// console.log(res)

// // #2 Array String First Character:-

// // Given an array of string generate an array with their first characters
// // Sample Output - ["M", "S"]

// Input = ["Masai", "School"]

// var res = Input.map(function (elem) {
//     return elem[0]
// });
// console.log(res)

// // #3 Array String Pattern:-

// // Given an array of string generate an array whose first or last character is a
// // Sample Input - ["assignment", "problem", "media", "upload"]
// // Sample Output - ["assignment", "media"]

// Input = ["assignment", "problem", "media", "upload"]

// var res = Input .filter(function (elem) {
//     return elem[0]=="a" || elem[elem.length-1]=="a"

// });
// console.log(res)

// // #4 Array Odd Length String sum:-

// // Given an array of strings print the sum of lengths if the characters in the string are odd
// // Sample Input - ["A", "Good", "Problem"]
// // Sample Output - 8

// array = ["A", "Good", "Problem"]

// var res1 = array.map(function (elem) {
//     return elem.length
// });
// // console.log(res1)

// var res2 = res1.filter(function (elem) {
//   return elem % 2 == 1;
// });
// // console.log(res2);

// var res3 = res2.reduce(function (sum, elem) {
//   return sum + elem;
// });
// console.log(res3);

// #5 Array some criteria

// Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]

var arr = [2, 4, 5, 3, 6, 8];
var res = arr.filter(function (elem, index) {
  return elem % 2 == 0 && index % 2 == 0;
});
console.log(res);
