/**
 * Javascript Exercise: Objects
 */

/**
 * Question 1:
 * Modify the "booleanValue" function so that it returns "true" when it's called.
 */
function booleanValue() {
  return true;
}


/**
 * Question 2:
 * Modify the "helloWorld" function so it returs the string "Hello World!". 
 * Notice that the function is being executed and the result stored in the variable "q2"
 */
function helloWorld() {
return "Hello World!";
}
var q2 = helloWorld();


/**
 * Question 3:
 * Modify the function "join" so that it concatenates (joins) the two string arguments together. 
 * Notice that the result of that function is being stored in q3
 */
function join(left, right) {
	return left + right;
}
var q3 = join("1 + 1 = ", "2");


/**
 * Question 4:
 * You're on your own this time! First, write a function called "multiply" which takes in 
 * two numbers, multiplies them, and returns the result. Next call your new function 
 * with the number 42 and 3257 and store the result in variable "q4".
 */

 function multiply (a, b) {
 	return a * b;
 }

var q4 = multiply(42,3257);



/**
 * Question 5:
 * Write a function named "smallNumber" that compares two number and returns that one. 
 */

function smallNumber (a,b) {
	if (a > b) {
		return b;
	}

	else {
		return a;
	}
}

/**
 * Question 6:
 * Similar to question 5, write a function called "bigNumber" which returns the larger of the
 * two number passed in as arguments
 */

function bigNumber (a,b){
	if (a > b) {
		return a;
	}

	else {
		return b;
	}
}


/**
 * Question 7:
 * Write a function named "sumArray" that takes an array as its only argument
 * and finds the sum of all the numbers in an array. 
 * There is an array provided below to test with.
 * Hint: Use you for loops!
 */
var testArray = [1, 5, 4, 3, 2, 9, 8, 7, 6, 10];

function addArray ( items ) {

	var a = 0;
	for (var i = 0; i < items.length; i++) {
		a = a + items[i];
	}
	return a;
}

console.log(addArray(testArray));


/**
 * Question 8:
 * Now that you're a function writing master, write a function named "theBigOne" that finds the 
 * largest number in an array and returns it
 * Hint: You'll need to keep track of the largest number you found so far as 
 *       you step through the array
 */

function theBigOne (items) {

	var a = 0;

	for (var i = 0; i < items.length; i++) {

		if (items[i] > a){
			a = items[i];	
		} 

		else {
			a = a;
		}
	}
	return a;
}

console.log(theBigOne(testArray));


