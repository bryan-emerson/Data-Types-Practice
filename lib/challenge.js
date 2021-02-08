/*
 * Before you begin working on the prompts, open up index.html and add a script
 * tag to import this JavaScript file. You'll know it's working when you see the
 * console.log below in the console of your browser.
 */

console.log("challenge.js has been included!");

/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */
let myFavoriteNumber = 16;
myFavoriteNumber = 18;
//console.log(myFavoriteNumber);

/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */

var taco = "good";
let time = "five oclock";
const myHome = "vermont";


/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

 let promptThreeNum = 2;
 console.log(promptThreeNum + 2);
 console.log(promptThreeNum - 1);
 console.log(promptThreeNum * 3);
 console.log(promptThreeNum / 7);
 console.log(promptThreeNum % 2);

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */

let firstName = "Bryan";
let lastName = "Emerson";
var fullName = firstName + lastName;
console.log(fullName);

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */

 let hello = "hello";
 var message = `${hello} world`;
 console.log(message);

/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below.
 */

/** A. Use loose-equals (==) to create a statement that is false */

// Write code here

/** B. Use strict equals (===) to create a statement that is true */

// Write code here

/** C. Use strict unequal (!==) to create a statement that is true */

// Write code here

/** D. Use less than (<) to create a statement that is false */

// Write code here

/** E. Use greater than (>) to create a statement that is false */

// Write code here

/** F. Use less than or equals (<=) to create a statemetn that is true */

// Write code here

/** G. Use greater than or equals (>=) to create a statemetn that is false */

// Write code here

/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = "Kevin";

/** a _ b; */

// Write code here

/** c _ d; */

// Write code here

/** 'Name' ___ 'Name'; */

// Write code here

/** a _ b ___ c; */

// Write code here

/** a _ a ___ d; */

// Write code here

/** e ___ 'Kevin'; */

// Write code here

/** 48 ___ '48'; */

// Write code here

/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = "Jelly Bean";

// a _ b;

// c _ d;

// 'Peanut' ___ 'Peanut';

// a _ b ___ c;

// a _ a ___ d;

// e ___ 'Jelly Bean';

// 48 ___ '48';

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ["Marty Marion", "Marty Feldman", "Marty McFly", "Marty Marion"];
let array2 = [
  ["Marty Feldman", "Marty Marion"],
  ["Marty Stuart", "Marty McFly"],
  ["Marty Jannetty", "Marty Robbins"]
];
let array3 = [
  ["Marty Feldman", ["Marty Marion"]],
  ["Marty Stuart", ["Marty Janetty", ["Marty McFly"], "Marty Robbins"]]
]; console.log(array3[1][1][1][0]);

/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ["a", "b", "c", "d", "e"];

/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ["Thom", 1000, "Christchurch"];
let karolin = ["Karolin", 16, "New York"];
let kristyn = ["Kristyn", 5, "Pittsburgh"];
let cathleen = ["Cathleen", 186, "New York"];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
