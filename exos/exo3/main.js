const num = document.getElementById("num");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
num.value = "";
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const characters = "~#{[!?,;.*µù`^@]}";
const all = alphabet + numbers + characters;

btn.addEventListener("click", function() {   
    console.log(num.value);
    
    result.innerHTML = "";
    let test = "";
    test += numbers.charAt(Math.floor(Math.random() * numbers.length));
    test += characters.charAt(Math.floor(Math.random() * characters.length));
    
    for (let i = 0; i < num.value - 2; i++) {
        const random = Math.floor(Math.random() * all.length);
        const character = all[random];
        test += character;
    }
    // console.log(`Avant split : ${typeof(test)}`);
    
    const testCopy = test.split("");
    // console.log(`Après split : ${typeof(testCopy)}`);
    console.log(testCopy);
    
    const testCopy2 = testCopy.sort(() => Math.random() - 0.5 );
    console.log(testCopy2);
    
    const testCopy3 = testCopy2.join("");
    result.innerHTML += testCopy3;
    console.log(result.innerHTML);
    
})