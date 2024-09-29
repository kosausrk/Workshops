function cheatSheet() { // Here to prevent block-scope variables
/**
 * This file contains uses of the JavaScript concepts that we need for this project :)
 */


/**
 * MISCELLANEOUS
 */

// This is a comment!

// Printing to the console
console.log("This is the thing you want to print!");
console.log(2 + 2);

// Getting user input using prompt()
let age = prompt("Enter your age: "); // When the user enters their age, the input is saved to this variable 'age'
console.log("You are " + age + " years old!");


/**
 * VARIABLES
 */

// Variables: declare with let (changeable variable) or const (non-changeable)
const gravity = 9.81; // this cannot change!
let score = 10;
score += 5; // score now equals 15

// Variable Types: String, Numbers, Boolean (true/false), null, undefined
const personName = 'John'; // String
const personAge = 20; // number
const gpa = 3.4; // number with decimal
const isStudent = true; // boolean

const x = null; // explicitly nothing
const y = undefined; // declared, but no value yet

console.log(typeof personName); // Prints the variable type of 'personName' (should be 'string')


/**
 * ARRAYS
 */

// Arrays: variables that hold multiple values in order
// Can be indexed (index 0 is the first value, the last value is the array's length - 1)
const shoppingList = ['Milk', 'Eggs', 'Bread', 'Butter']; // shoppingList[0] = 'Milk', shoppingList[shoppingList.length - 1] = 'Butter'

// Modifying arrays
shoppingList.push('Orange Juice'); // Adds 'Orange Juice' to the end of the list
shoppingList.pop(); // Removes the last item from the list ('Orange Juice' in this case)

console.log(shoppingList); // Prints the current shopping list

// Accessing and modifying items
shoppingList[1] = 'Free-range Eggs'; // Change 'Eggs' to 'Free-range Eggs'
console.log(shoppingList[1]); // Outputs 'Free-range Eggs'


/**
 * ARRAY METHODS: forEach, map, and filter
 */

// forEach: executes a function for each element in the array (does not return a new array)
const numbers = [1, 2, 3, 4];
numbers.forEach(number => {
  console.log(number); // Outputs each number in the array
});

// map: transforms each element of the array and returns a new array
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Outputs [2, 4, 6, 8]

// filter: filters elements of an array based on a condition and returns a new array
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Outputs [2, 4]


/**
 * CONDITIONALS
 */

// Control Flow: If statements
// Logical AND: && (two ampersands)
// Logical OR: || (two pipes)
// EQUALS: == (one equals sign for assigning variables, two for comparisons)
if (score > 10 || win == true) { // if score greater than 10 OR win condition is true
  console.log('You passed!');
} else if (score == 10) {
  console.log('You barely made it.');
} else {
  console.log('Try again!');
}


/**
 * LOOPS
 */

// Loops: for loop and for...of loop
for (let i = 0; i < waitlist.length; i++) {
  console.log(waitlist[i]); // Prints each person on the waitlist
}

for (const fruit of fruits) {
  console.log(fruit); // Prints each fruit in the array
}


/**
 * FUNCTIONS
 */

// Functions: reusable blocks of code
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('John')); // Outputs 'Hello, John!'

// Arrow functions (ES6+)
const add = (a, b) => a + b;
console.log(add(5, 3)); // Outputs 8


/**
 * OBJECTS
 */

// Objects: data with key-value pairs
const person = {
  name: 'John',
  age: 20,
  isStudent: true
};

console.log(person.name); // Outputs 'John'
console.log(person['age']); // Outputs 20
}