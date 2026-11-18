// 4. Login & Role Check
// • Task: Create two variables: isLoggedIn (boolean) and role
// (e.g., "admin", "editor", "guest").
// • If not logged in, log "Please log in".
// • If logged in and role === "admin", log "Welcome, Admin".
// • If logged in with any other role, log "Welcome, User".

let isLoggedIn = false;
// let role = "admin";
let role = "guest";


if(isLoggedIn === false){
    console.log("Please login");
    if( role === "admin" ){
        console.log("Welcome, Admin");
    }
    else{
        console.log("welcome, User")
    }
}
