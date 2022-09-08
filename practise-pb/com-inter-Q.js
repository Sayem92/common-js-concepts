// Common Interview Questions

// 1) Tell the difference Between Primitive and Non-Primitive Data Types in JavaScript.
// 2) What are the Truthy and Falsy values? Give me some examples.
// 3) What is the difference between null and undefined?
// 4) What are the differences between double equal (==) and triple equal (===)?
// 5) What is scope in JavaScript?
// 6) Define block scope and global scope.
// 7) What is hoisting in JavaScript?
// 8) How to use the JavaScript callback function?
// 9) Explain closure in JavaScript
// 10) Explain passed by value and passed by reference.



//------------------------------ 1  ans   --------------------------

// The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol. The Non-Primitive data type has only one member i.e. the Object.


// What is the difference between primitive and non-primitive data structure?

// Primitive data structure is a kind of data structure that stores the data of only one type. Non-primitive data structure is a type of data structure that can store the data of more than one type.

//------------------------------ 2   ans   --------------------------

// What are truthy and Falsy values?

// Image result for What are the Truthy and Falsy values? Give me some examples.
// Truthy values are values that evaluate to True in a boolean context. Falsy values are values that evaluate to False in a boolean context. Falsy values include empty sequences (lists, tuples, strings, dictionaries, sets), zero in every numeric type, None , and False

//------------------------------ 3  ans   --------------------------

// Difference Between undefined and null

// undefined is a variable that refers to something that doesn't exist, and the variable isn't defined to be anything. null is a variable that is defined but is missing a value.

//------------------------------ 4  ans   --------------------------

// What is the difference between == and === operators?

// The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands


//Double Equals ( == ) checks for value equality only. It inherently does type coercion. This means that before checking the values, it converts the types of the variables to match each other. On the other hand, Triple Equals ( === ) does not perform type coercion.

//------------------------------ 5  ans   --------------------------

// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);

//------------------------------ 6  ans   --------------------------

// What is global scope and block scope?


// A block is a piece of code inside a set of curly braces {} and groups code statements together. An example of a block could be a function, like this:
// The Global scope. A variable exists inside or outside a block. If a variable is declared outside all functions or curly braces ({}), it exists in the global scope

//------------------------------ 7  ans   --------------------------

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.
//------------------------------ 8  ans   --------------------------


// How do callback functions work in JavaScript?

// A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function

//------------------------------ 9  ans   --------------------------

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function


// What is closure in JavaScript interview questions?

// A closure is a function that accesses variables “outside” itself, in another function's scope, even after the parent function has closed. A closure is able to do this because of a saved reference to the lexical environment it was initially defined in.


//------------------------------ 10  ans   --------------------------


// "Passing by value" means that you pass the actual value of the variable into the function. So, in your example, it would pass the value 9. "Passing by reference" means that you pass the variable itself into the function (not just the value). So, in your example, it would pass an integer object with the value of 9

const student1 = {name : 'Jalil', partner : 'Borsha'}
const student2 = {name : 'Raj', partner : 'Anika'}

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto'
}

// console.log(student1)               //{ name: 'Jalil', partner: 'Borsha' }
makeMovie(student1, student2)
// console.log(student1)               //{ name: 'Ononto', partner: 'Borsha' }