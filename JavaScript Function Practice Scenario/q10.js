// Question 10: Smart Function Based Calculator
// You are developing a calculator application that can perform four mathematical operations:
// • Addition
// • Subtraction
// • Multiplication
// • Division
// Instead of writing separate conditions for every calculation inside one large function, you must
// create a callback based calculator.
// Your task:
// 1. Create four arrow functions:
// o add(a, b)
// o subtract(a, b)
// o multiply(a, b)
// o divide(a, b)
// 2. Create an arrow function calculate(a, b, operationCallback) that accepts two
// numbers and a callback function.
// 3. Pass the appropriate operation function as a callback when calling calculate().
// 4. Display the result of each operation.
// 5. Handle division by zero appropriately.
// Example:
// Addition: 20 + 10 = 30
// Subtraction: 20 - 10 = 10
// Multiplication: 20 * 10 = 200
// Division: 20 / 10 = 2

const add = (a, b) => {

    console.log(`Addition: ${a} + ${b} = ${a+b}`);

}

const subtract = (a, b) => {
    console.log(`Subtraction: ${a} - ${b} = ${a-b}`);

}

const multiply = (a, b) => {
    console.log(`Multiplication: ${a} * ${b} = ${a*b}`);

}

const divide = (a, b) => {
    if(b === 0){
        console.log("thats why you are single")
    }else{
            console.log(`Division: ${a} / ${b} = ${a/b}`);
    }
}

const calculate = (a, b, operationCallback) => {
    operationCallback(a,b);
}

calculate(10, 0, add);
calculate(10, 0, subtract);
calculate(10, 0, multiply);
calculate(10, 0, divide);