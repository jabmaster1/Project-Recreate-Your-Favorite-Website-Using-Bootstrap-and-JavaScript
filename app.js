// Function to check email validation for editors

let emails = ["john_doe@gmail.com", "jane_doe@gmail.com", "rando_123@aol.com"];

function emailCheck(email){
    if(emails.includes(email)){
        console.log("Access Granted.");
    } else {
        console.log("Acess Denied.");
    }
}

emailCheck("john_doe@gmail.com");

// Function to check if the articles per day record increased

let articlesPerDay = [123, 114, 155, 175];

function recordIncreaseCheck(articles){
    let articlesRecord = Math.max(...articlesPerDay);
    if(articles > articlesRecord){
        articlesPerDay.push(articles);
        console.log("New Record! " + articles);
    } else {
        console.log("No new record. Highest is still: " + articlesRecord);
    }
}

recordIncreaseCheck(177);

// Simple user greeting after logging in

function greetUser(userName){
    console.log("Hello, " + userName + "!");
}
greetUser("John");

// displays all active users currently

let usersOnline = ["John", "Jane", "Rando" , "Bob", "Jobe"];

function activeUsers(){
    console.log("There are " + usersOnline.length + " active users currently.");
}

activeUsers();