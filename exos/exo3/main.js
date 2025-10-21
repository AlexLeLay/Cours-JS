const num = document.getElementById("num");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

// const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
// const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = "0123456789";
// const characters = "~#{[!?,;.*µù`^@]}";

const characters = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789","~#{[!?,;.*µù`^@]}"]

// let alphabetLowerCount = 0;
// let alphabetUpperCount = 0;
// let numbersCount = 0;
// let charactersCount = 0;
// let total;

btn.addEventListener("click", function() {
    console.log(num.value);
    
    result.innerHTML = "";
    for (let i = 0; i < num.value; i++) {
        console.log("test");
        
        for (let j = 0; j < characters[i].length; j++) {
            console.log("retest");
            
            const random = Math.floor(Math.random() * characters[i].length);
            const character = characters[i][random];
            result.innerHTML += character
        }
        
    }
})

num.addEventListener("change", function() {
    console.log(num.value)
})
