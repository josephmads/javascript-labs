/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let numOne = 1234;
let numTwo = 5678;
let numThree = 9012;
let luckyNumber = 7;

result = numOne + numTwo + numThree
console.log("Sum of all numbers", result)

result = numThree - (numOne + numTwo)
console.log("Subtracting smaller numbers from larger number", result)

result = numOne * numTwo * numThree
console.log("Multiplying all the numbers", result)

result = numThree / (numTwo - numOne)
console.log("Largest number divided by the difference between the smaller ones", result)

result = numOne % luckyNumber
console.log("Result of numOne modulo 7", result)

result = numTwo % luckyNumber
console.log("Result of numTwo modulo 7", result)

result = numThree % luckyNumber
console.log("Result of numThree modulo 7", result)