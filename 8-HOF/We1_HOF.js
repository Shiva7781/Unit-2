// // #1 Given an array of numbers print the square of those numbers

// var array = [2, 4, 5, 8, 9, 8];
// var res = array.forEach(function (elem) {
//   console.log(elem ** 2);
// });

// // #2 Given an array of numbers generate an array containing the double value of the numbers
// // Sample Input [1, 2]
// // Sample Output [2, 4]

// var arr = [1, 2];
// var res = arr.map(function (elem) {
//   return elem * 2;
// });
// console.log(res);

// // #3 Given an array of numbers extract the numbers which are odd
// // Sample Input - [1,2,3]
// // Sample Output - [1,3]

// var arr = [1, 2, 3];
// var res = function (elem) {
//   return elem % 2 == 1;
// };
// console.log(arr.filter(res));

// // #4 Given an array of numbers print the product of all numbers
// // Sample Input - [2,3,4]
// // Sample Output - 24

// var arr = [2, 3, 4];
// var res = arr.reduce(function (sum, elem) {
//   return sum * elem;
// }, 1);
// console.log(res);

// // #5 Given an array of numbers find the sum of odd elements
// // Sample Input - [1, 2, 3, 4]
// // Sample Output - 4

// *********** METHOD - I ***********

// var arr = [1, 2, 3, 4];
// var isOdd = function (elem) {
//   return elem % 2 == 1;
// };

// // ***var res = arr.filter(isOdd)
// // console.log(res);***

// var calSum = function (ac, cv) {
//   return ac + cv;
// };
// var res = arr.filter(isOdd).reduce(calSum);
// console.log(res);

// *********** METHOD - II ***********
var arr = [1, 2, 3, 4];
var isOdd = function (elem) {
  return elem % 2 == 1;
};

var res = arr.filter(isOdd).reduce(function (ac, cv) {
  return ac + cv;
});
console.log(res);

// // #6 Given an array of numbers find the sum of cubes if the number is divisible by 3
// // Sample Input - [1, 2, 3, 4, 5, 6]
// // Sample Output - 243 (27+216)

var arr = [1, 2, 3, 4, 5, 6];
var res1 = function (elem) {
  return elem % 3 == 0;
};

var res = arr.filter(res1).reduce(function (ac, cv) {
  return ac + (cv**3);
},0);
console.log(res);
