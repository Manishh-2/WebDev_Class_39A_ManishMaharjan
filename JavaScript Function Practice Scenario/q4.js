// Question 4: Movie Ticket Booking System
// A cinema hall has introduced an automated ticket booking system.
// Ticket prices depend on the customer's age:
// • Children below 12 years: Rs. 150
// • Teenagers between 12 and 17: Rs. 200
// • Adults between 18 and 59: Rs. 300
// • Senior citizens aged 60 or above: Rs. 200
// The cinema also offers a 10% discount if a customer books 5 or more tickets.
// Your task:
// 1. Create an arrow function getTicketPrice(age) that returns the ticket price.
// 2. Create an arrow function calculateTotal(price, quantity) that calculates the total
// amount.
// 3. Create an arrow function applyDiscount(total, quantity) that applies the discount
// when applicable.
// 4. Create an arrow function bookTicket(name, age, quantity, callback) that accepts
// a callback to process the booking.
// 5. Display the customer's name, ticket quantity, and final amount.
// Example:
// Customer: Hari
// Age: 25
// Tickets: 5
// Total Before Discount: Rs. 1500
// Discount: Rs. 150
// Final Amount: Rs. 1350

const getTicketPrice = (age) => {
    if (age < 12){
        return 150;
    }else if(age <= 17){
        return 200;
    }else if(age <= 59){
        return 300;
    }else if(age >= 60){
        return 200;
    }
        

} 

const  calculateTotal = (price, quantity)  => {
    return price*quantity;

}

const applyDiscount = (total, quantity) => {
    if(quantity >= 5){
        return (total*0.1);
    }
    else{
        return 0;
    }

}

const bookTicket = (name, age, quantity, callback) => {

    let ticketPrice = getTicketPrice(age);

    let beforedis = callback(ticketPrice, quantity);
    let getdis = applyDiscount(beforedis, quantity);
    let afterdis = beforedis - getdis;

    console.log(`customer : ${name}`);
    console.log(`age: ${age}`);
    console.log(`Total Before Discount : Rs ${beforedis}`);
    console.log(`discount : Rs ${getdis}`);
    console.log(`Final Amoount : Rs ${afterdis}`);
}

bookTicket("Dumb", 16, 5, calculateTotal);

