// 3. Leap Year Checker
// • Task: Determine if a given year is a leap year.
// • Rule: A year is a leap year if it is divisible by 4 and not
// divisible by 100, or if it is divisible by 400

let year = 2028;

if(year % 4 === 0 && (year % 100 !=0  || year % 400 === 0)){
    console.log(year +" it is leap year");
}else{
    console.log( year +" it is not leap year");
}