// Question 6: Food Delivery Charge Calculator
// A food delivery company calculates delivery charges based on the distance between the
// restaurant and the customer.
// The delivery charge is:
// • First 2 km: Rs. 30
// • Every additional kilometre: Rs. 15
// Additionally:
// • If the order amount is Rs. 1,000 or above, delivery is free.
// • Otherwise, the customer must pay the calculated delivery charge.
// Your task:
// 1. Create an arrow function calculateDelivery(distance) that returns the delivery
// charge.
// 2. Create an arrow function checkFreeDelivery(orderAmount) that returns whether the
// order qualifies for free delivery.
// 3. Create an arrow function processOrder(customer, distance, orderAmount,
// callback) that accepts a callback to calculate the final delivery charge.
// 4. Display the customer's name, order amount, distance, and delivery charge.
// Example:
// Customer: Shyam
// Order Amount: Rs. 800
// Distance: 5 km
// Delivery Charge: Rs. 75

const calculateDelivery = (distance) => {
    let deliveryCharge = 0;
    ;
    for( let i = 2; i <= distance; i++){
        if( i <= 2){
        deliveryCharge = deliveryCharge + 30}
        else{
            deliveryCharge = deliveryCharge + 15;
        }
    }

     return deliveryCharge;
}

const checkFreeDelivery = (orderAmount) => {
    if(orderAmount >= 1000){
        return 0;
    }else{
        return 1;
    }

}

const processOrder = (customer, distance, orderAmount, callback) => {

    let freecheck = callback(orderAmount);
    let delivery = calculateDelivery(distance);
   
    if(freecheck === 0){
        delivery *= 0;
    }else{
        delivery *= 1;
    }
    

    console.log(`Customer: ${customer}`);
    console.log(`Order Amount: Rs ${orderAmount}`);
    console.log(`Distance : ${distance} km`);
    console.log(`Delivery Charge: Rs ${delivery}`);

}

processOrder("Girl in Red", 4, 8000, checkFreeDelivery)
