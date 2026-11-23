// Question 7: ATM Withdrawal System
// A bank wants to create a simple ATM withdrawal system.
// The system follows these rules:
// • A customer cannot withdraw more money than their available balance.
// • The withdrawal amount must be a multiple of 500.
// • A withdrawal fee of Rs. 25 is charged for every successful withdrawal.
// • If the withdrawal is unsuccessful, the balance must remain unchanged.
// Your task:
// 1. Create an arrow function validateWithdrawal(amount, balance) that checks whether
// the withdrawal is valid.
// 2. Create an arrow function withdrawMoney(amount, balance, callback) that accepts a
// callback to validate the transaction.
// 3. If the transaction is valid, deduct the withdrawal amount and transaction fee from the
// balance.
// 4. If invalid, display an appropriate error message.
// 5. Display the remaining balance after the transaction.
// Example:
// Account Balance: Rs. 10000
// Withdrawal Amount: Rs. 3000
// Withdrawal Successful!
// Transaction Fee: Rs. 25
// Remaining Balance: Rs. 6975

const validateWithdrawal = (amount, balance) => {
    if (amount > balance){
        return `Withdrawal Unsuccessful`;
    }else{
        if(amount % 500 === 0){
            return `can withdraw`;
        }else{
            return `The withdrawal amount must be a multiple of 500`;
        }
    }

}

const withdrawMoney = (amount, balance, callback) => {
    canOrnot = callback(amount, balance);
    let fee = 25;

    if (canOrnot === `can withdraw`){

        
        console.log(`Account Balance: Rs. ${balance}`);
        console.log(`Withdrawal Amount: Rs. ${amount}`);
        console.log(` `);

        console.log(`Withdrawal Successful!`);
        balance = balance-amount;

        console.log(`Transaction Fee: Rs. ${fee}`);
        console.log(`Account Balance: Rs. ${balance}`);

    }else{
        console.log(`${canOrnot}`)
    }
}

withdrawMoney(50000, 200000, validateWithdrawal);