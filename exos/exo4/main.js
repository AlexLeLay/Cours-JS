const num = document.getElementById("num");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const vowels = "aeiouyAEIOUY";
const consonants = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ";
const alphabet = vowels + consonants;
const numbers = "0123456789";
const characters = "~#{[!?,;.*`^@]}";
const specials = numbers + characters;
let word = [];
let separator = "";
// word length 5 or 6
function wordLength() {
    return Math.random() < 0.5 ? 5 : 6;
}

num.value = "";

btn.addEventListener("click", function() {    
    let numValue = parseInt(num.value);
    result.innerHTML = "";
    word = [];
    console.clear();
    console.log(numValue);
    
    for (let i = 0; i < numValue; i++) {
        const length = wordLength();
        for (let j = 0; j < length; j++) {
            const vowelRand = Math.floor(Math.random() * vowels.length);
            const consonantRand = Math.floor(Math.random() * consonants.length);
            console.log(`Valeur de vowelRand : ${vowelRand}`);
            console.log(`Valeur de consonantRand : ${consonantRand}`);
            if (j === 0) {
                word.push(consonants[consonantRand]);
                continue
            }
            if (j % 2 === 0) {
                word.push(consonants[consonantRand]);
            } else {
                console.log(`Valeur de j : ${j}`);
                
                word.push(vowels[vowelRand]);
            }
        }
        if (i === numValue - 1) {
            break
        }
        // separator
        for (let i = 0; i < 3; i++) {
            word.push(specials[Math.floor(Math.random() * specials.length)])
        }
    }
    console.log(word);
    const wordFinal = word.join("");
    result.innerHTML = wordFinal;
    
    
})