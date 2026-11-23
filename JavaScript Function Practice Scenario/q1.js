// Question 1: Smart Electricity Bill Calculator
// A local electricity authority wants to automate its monthly electricity billing system.
// The electricity charge depends on the number of units consumed:
// Units consumed Rate per unit
// First 20 units Rs. 5
// Next 30 units Rs. 7
// Above 50 units Rs. 10
// The authority also charges a fixed service fee of Rs. 50.
// Your task:
// 1. Create an arrow function calculateBill(units) that calculates the total electricity bill.
// 2. Create another arrow function displayBill(name, units, callback) that accepts a
// customer's name, consumed units, and a callback function.
// 3. The callback should calculate the bill and return the amount.
// 4. Display the customer's name, consumed units, and final bill.



const calculateBill = (units) =>{

    let serviceCharge = 50;
    let perPriceUnit = 1;

    console.log(`Unit Consumed : ${units}`);
    
    

    if(units <= 20) {
        perPriceUnit = units* 5;
        console.log(`Unit Consumed Rate : ${perPriceUnit}`);
    }else if(units <= 50){
        perPriceUnit = units* 7;
        console.log(`Unit Consumed Rate : ${perPriceUnit}`);
    }else{
        perPriceUnit = units* 10;
        console.log(`Unit Consumed Rate : ${perPriceUnit}`);
    }

    console.log(`Service Charge : ${serviceCharge}`);

    console.log(`Total Electricity Bill : ${serviceCharge + perPriceUnit}`);
}

const displayBill = (name, units, callback) => {
    console.log(`Customer : ${name}`);
    callback(units);
} 

displayBill("hahah", 50, calculateBill);

