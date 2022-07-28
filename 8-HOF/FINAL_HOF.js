// function web15(message, web14) {
//   console.log("Hi" + " " + message);
//   web14();
// }

// web15("I am student from web-15", web14);

// function web14() {
//   console.log("I am student from web-14 async");
// }

// function xyz() {
//   console.log("some function");
// }
// xyz();

// // function statement------------------------------------------------------------------
// // function xyz() {
// //   console.log("some function");
// // }

// // xyz();

// // function expression-----------------------------------------------------------------
// var b = function () {
//   console.log("another function");
// };
// b();

// // ************************* forEach *************************-------------------------
// var names = ["prateek", "nrupul", "yogesh"];

// // console.log(names[0]);
// // console.log(names[1]);
// // console.log(names[2]);

// // for (var i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }

// names.forEach(someFunction);
// function someFunction(item) {
//   console.log(item);
// }

// var nums = [64, 12, 12, 4, 5];
// var arr = [];

// nums.forEach(function (elem, index, array) {
//   arr.push(index);
//  // console.log(arr);
// });
// console.log(arr);

// // order of parameters should be same

// // ********************* map (same as forEach but with one adv) *********************

// var nums = [64, 21, 12, 41, 15];

// nums.map(function (elem){
//   console.log(elem)
// })

// var res = nums.map(function (a) {
//   return a*2;
// });
// console.log(res);

// // ***********forEach won't return anything -- undefined***********
// // ***********map will return an array***********


// ********************* filter *********************

// var words = ["abc", "abcd", "abcde", "abcddfe", "abcddety"];

// filter will also return like map

// var res = words.map(function (elem) {
//   return elem.length > 3;
// });

// console.log(res);

// whatever condition is true, filter will return those in form of array

// var ages = [10, 40, 12, 18, 20];

// var res = ages.filter(function (elem) {
//   return elem > 18;
// });

// console.log(res);
// // filter is also returning an array

// var nums = [3, 8, 9, 6, 12];

// var res = function (elem) {
//   return elem % 2 == 1;
// };

//  console.log(nums.filter(res));

// // ******* reduce ******* combine diff items to single item
// var arr = [3, 5, 6, 7]

// var res = arr.reduce(function (sum, currentValue) {
//   return sum + currentValue;      // stored in sum
// }, 10)

// console.log(res)

// sum = 10 --> cv = 3 --> 10+3 --> sum = 13
// sum = 13 --> cv = 5 --> 13+5 --> sum = 18
// sum = 18 --> cv = 6 --> 18+6 --> sum = 24
// sum = 24 --> cv = 7 --> 24+7 --> sum = 31

// // *********** Whenever there is no initial value, it will take 1st element of arr ***********

// var arr = [3, 5, 6, 7]

// var res = arr.reduce(function (sum, currentValue) {
//   return sum + currentValue;      // stored in sum
// })

// console.log(res)
