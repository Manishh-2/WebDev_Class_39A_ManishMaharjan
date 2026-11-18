// 5. Largest of Three Numbers
// • Task: Given three numbers a, b, and c, find and log the
// largest one without using Math.max().

let a =100; 
let b=250; 
let c = 300;

if(a>b && a>c){
    console.log(a + " is largest");
}else if(b>a && b>c){
    console.log(b + " is largest");
}else{
    console.log(c + " is largest");
}