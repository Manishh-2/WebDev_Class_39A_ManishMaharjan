// Question 8: Restaurant Order Management System
// A restaurant wants to automate its food ordering system.
// The restaurant offers the following items:
// Food item Price
// Burger Rs. 250
// Pizza Rs. 500
// Momo Rs. 150
// Chowmein Rs. 180
// Customers can order any one of these items in any quantity.
// The restaurant also applies a 5% service charge to the total food amount.
// Your task:
// 1. Create an arrow function getFoodPrice(foodName) that returns the price of the selected
// food.
// 2. Create an arrow function calculateServiceCharge(total) that calculates the service
// charge.
// 3. Create an arrow function calculateOrder(foodName, quantity, callback) that
// accepts a callback to calculate the food amount.
// 4. Create an arrow function generateReceipt(customerName, foodName, quantity,
// callback) that generates the final receipt.
// 5. Display the food name, quantity, food amount, service charge, and final amount.
// Example:
// Customer: Suman
// Food: Burger
// Quantity: 2
// Food Amount: Rs. 500
// Service Charge: Rs. 25
// Final Amount: Rs. 525


const menu = {
    Burger: 250,
    Pizza: 500,
    Momo: 150,
    Chowmein: 180
};


const getFoodPrice = (foodName) => {
    return menu[foodName];
};


const calculateServiceCharge = (total) => {
    return total * 0.05;
};


const calculateOrder = (foodName, quantity, callback) => {
    const price = getFoodPrice(foodName);
    const total = price * quantity;

    return callback(total);
};


const generateReceipt = (customerName, foodName, quantity, callback) => {
    const foodAmount = getFoodPrice(foodName) * quantity;
    const serviceCharge = calculateServiceCharge(foodAmount);
    const finalAmount = foodAmount + serviceCharge;

    callback(customerName, foodName, quantity, foodAmount, serviceCharge, finalAmount);
};


generateReceipt("dottty", "Burger", 2, (customer, food, qty, amount, charge, final) => {
    console.log("Customer:", customer);
    console.log("Food:", food);
    console.log("Quantity:", qty);
    console.log("Food Amount: Rs.", amount);
    console.log("Service Charge: Rs.", charge);
    console.log("Final Amount: Rs.", final);
});



