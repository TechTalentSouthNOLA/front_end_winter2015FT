// var message = "Hello, world!";
// console.log(message);

// var x = "hey";
// var y = 10;

// console.log(x);
// console.log(y);
// console.log(x + y);

// y = " is for horses!";
// console.log(x + y);

// var a = 1, b = 2, c = "3";
// console.log(a + b + c);




// ******** Data types *********
// Numbers
// var integer_num = 1;
// // var float_num = 1.23;
// // console.log(integer_num + float_num);

// // Strings
// var message = "Let's learn JavaScript, ";
// var name = "class";
// console.log(message + name);

// // Booleans
// var is_cool = true;
// console.log(is_cool + " dat");

// // Arrays
// var my_stuff = [integer_num, message, is_cool];
// console.log(my_stuff);

// Hashes
// var capitals = {
//   "LA": "Baton Rouge",
//   "TX": "Austin",
//   "GA": "Atlanta"
// };
// console.log(capitals["LA"]);




// ********** Null and Undefined ***********
// var x;

// Variables that have NOT been initialized are UNDEFINED
// console.log(x);

// But they are NOT null
// console.log(x === null);   // false

// Unless you actually make them null
// x = null;
// console.log(x);                // null
// console.log(x === null);       // true
// console.log(x === undefined);  // false

// Or if I accidentally used type coercion (only 2 equal signs instead of 3, it will mislead me.
// console.log(x == undefined);   // true
// console.log(x);                // null




// ********** Scope *************************
// This variable is in the Global scope
// var x = "I'm a global variable called x";
// // console.log(x);

// // Define a function called someFunction
// function someFunction(){
//   // This variable only exists inside someFunction
//   var y = "I'm a local variable called y";
//   // console.log(x);
//   // console.log(y);

//   // Z is automatically global because I forgot my "var"
//   z = 10;
//   console.log(z);
// }

// someFunction();
// // console.log(x);
// // console.log(y); // y is not defined
// console.log(z); // gives 10 because we made it auto global




// *********** Operators *************
// var x = 10,
//     y = 5;

// console.log(x + y);  // 15
// console.log(x - y);  // 5
// console.log(x * y);  // 50
// console.log(x / 8);  // Regular division 1.25
// console.log(Math.floor(x / 8)); // Integer division 1
// console.log(x % 8);  // Modulus 2
// console.log(Math.pow(x, y));  // 100000

// console.log(x > y);  // true
// console.log(x < y);  // false
// console.log(x >= y); // true
// console.log(x <= y); // false

// console.log(x === y); // false
// console.log(x !== y); // true

// var a = true,
//     b = false;

// console.log(a && b);
// console.log(a || b);




// *********** Conditionals ***********
// var x = 10,
//     y = 10;

// if (x > y){
//   console.log("x is greater than y");
// } else if (x < y){
//   console.log("x is less than y");
// } else {
//   console.log("x is neither less than or greater than y");
// }




// *********** Loops ***************

// C-style loop
// var myArray = [1, 2, 3, 4, 5];

// in parentheses, first declare i and set to zero, then tell it when to stop, then tell it what to increment i by
// i++ is the same as i += 1 is the same as i = i + 1
// for (var i = 0; i < myArray.length; i++){
//   console.log(myArray[i]);
// }

// For each loop
// myArray.forEach(function (element){
//   console.log(element);
// });

// While loop
// var i = 0;

// while (i < myArray.length){
//   console.log(myArray[i]);
//   i++;
// }




// ********** Functions *************

// A function with explicit arguments
// function sumExplicitly(a, b){
//   console.log(a + b);
// }

// sumExplicitly(18, 2);

// // A function with implicit arguments
// function sumImplicitly(){
//   var total = 0,
//       i;

//   for (i = 0; i < arguments.length; i++){
//     total += arguments[i];
//   }

//   console.log(total);
// }

// sumImplicitly(1, 2, 3, 4, 582);

function sum(a,b){
  return a + b;
}

var x = sum(10,5);
var y = sum(x, sum(20, 30));
console.log(x);
console.log(y);
console.log(sum(x,y));
