// Question 5: Employee Salary Processing System
// A company wants to calculate the monthly salary of its employees.
// Every employee receives a basic salary. In addition:
// • Employees receive a 10% bonus if their basic salary is Rs. 40,000 or above.
// • Employees receive a 5% bonus if their basic salary is below Rs. 40,000.
// • Every employee has a fixed tax deduction of 5% from their basic salary.
// Your task:
// 1. Create an arrow function calculateBonus(salary) that returns the bonus amount.
// 2. Create an arrow function calculateTax(salary) that returns the tax amount.
// 3. Create an arrow function calculateNetSalary(salary, bonusCallback,
// taxCallback) that accepts two callback functions.
// 4. Use those callbacks to calculate the final salary.
// 5. Create another arrow function generatePayslip(name, salary, callback) that
// displays the employee's payslip.
// Example:
// Employee: Ram
// Basic Salary: Rs. 50000
// Bonus: Rs. 5000
// Tax: Rs. 2500
// Net Salary: Rs. 52500


const calculateBonus = (salary) => {
    if (salary >= 40000){
        return salary * (10/100);
    }else{
        return salary * (5/100);
    }
}

const  calculateTax = (salary) => {
    return (salary * (5/100));

}

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    basicssalary = salary;
    bonusSal = bonusCallback(salary);
    payTax = taxCallback(salary);

    let finalSalary = basicssalary + bonusSal - payTax;
    return finalSalary;
}


const generatePayslip = (name, salary, callback) => {

    let bonusSal = calculateBonus(salary);
    let tax = calculateTax(salary);
    let netSal = callback(salary, calculateBonus, calculateTax);

    console.log(`Employee : ${name}`);
    console.log(`Basic Salary : Rs ${salary}`);
    console.log(`Bonus : Rs ${bonusSal}`);
    console.log(`Tax : Rs ${tax}`);
    console.log(`Net Salary : Rs ${netSal}`);

}

generatePayslip("kaareena", 500000, calculateNetSalary);

