// 1. Shopping Discount
// • Task: Calculate the final price of an item based on a purchaseAmount:
// • $100 or more: 20% discount
// • $50 to $99.99: 10% discount
// • Under $50: No discount


let final_price = 0;
let price = 40;

if(price >= 100){
    final_price = price - (price * 0.2);
}else if(price >= 50 && price <= 99){
    final_price = price - (price * 0.1);
}else{
    final_price = price;
}

console.log(final_price + " is final purchase amount")