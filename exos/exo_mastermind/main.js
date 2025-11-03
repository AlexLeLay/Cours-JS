const COLORS = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
const palette = document.getElementById("palette");
const choices = document.getElementById("choices");
const validate = document.getElementById("validate");
const erase = document.getElementById("erase");
const reroll = document.getElementById("reroll");
const board = document.getElementById("board");
const gameOverMessage = document.getElementById("game-over-message");
const gameWinningMessage = document.getElementById("game-winning-message");



const COLORS_COPY = COLORS.slice(0, -1);
const targets = [];

let choicesNbr = 0;
let choicesArray = ["","","",""];
let tries = 0;
let isGameOver = false;
validate.disabled = true;

COLORS.forEach((color) => {    
    const btn = document.createElement("button");
    btn.classList.add("dot", "big", "solid");

    btn.dataset.color = color;
    btn.classList.add(color);
    palette.appendChild(btn);
});

const paletteArray = palette.querySelectorAll("button");

paletteArray.forEach(color => {
    color.addEventListener("click", () => {
        
        if (choicesNbr < 4) {
            // console.log(color);
            
            choicesArray[choicesNbr] = color.dataset.color;
            // console.log(choicesArray);
            color.disabled = true;
            choicesNbr++;
            // console.log(choicesNbr);

            renderChoices()
        }
        if (choicesNbr === 4){
            // console.log(choicesNbr);
            
            validate.disabled = false;
        }
    })
})

// console.log(choicesArray);


function renderChoices() {
    choices.innerHTML = "";
    choicesArray.forEach((choice, index) =>{
        
        const div = document.createElement("div");
        div.classList.add("dot", "big", "dashed");

        if (choice) {
            div.classList.add(choice);
            div.addEventListener("click", () => {
                const removedChoice = choicesArray[index];

                choicesArray[index] = "";
                choicesNbr--;

                paletteArray.forEach(color => {
                    if (color.dataset.color === removedChoice) {
                        color.disabled = false;
                    }
                })

                validate.disabled = true;
                renderChoices();
            })
        }
        choices.appendChild(div);
    })
}


renderChoices();
if (choicesNbr === 4) {
    validate.addEventListener("click", () => {
        // console.log("test");
        
    })
}

function colorsToGuess() {
    for(let i = 0; i < 4; i++) {
        const rand = Math.floor(COLORS_COPY.length * Math.random());
        targets.push(COLORS_COPY[rand]);
        COLORS_COPY.splice(rand, 1);
    }
} 

function guessColors(row, attempts, matches) {

    row.appendChild(attempts);
    row.appendChild(matches);
    choicesArray.forEach((choice, index) => {
        targets.forEach((target, i) => {
            const match = choice === target;
            const matchRightPlace = index === i;
            if (match && !matchRightPlace) {
                const whiteDot = document.createElement("div");
                whiteDot.classList.add("dot", "small", "solid", "white");

                matches.appendChild(whiteDot)
            }
            if (match && matchRightPlace) {
                const blackDot = document.createElement("div");
                blackDot.classList.add("dot", "small", "solid", "black");
            
                matches.appendChild(blackDot);
            }

        })
    })
}

function addAttempts(row, attempts, matches) {

    row.appendChild(attempts);
    row.appendChild(matches);
    choicesArray.forEach((choice) => {
        const div = document.createElement("div")
        div.classList.add("dot", "small", "solid", choice);

        attempts.appendChild(div);
    } )
}


colorsToGuess();
console.log(targets);

validate.addEventListener("click", () => {
    if (!isGameOver) {
        const attempts = document.createElement("div");
        attempts.classList.add("flex")
        const matches = document.createElement("div");
        matches.classList.add("flex");
        const row = document.createElement("div");
        row.classList.add("flex", "row");
        guessColors(row, attempts, matches);
        addAttempts(row, attempts, matches);
        board.appendChild(row);
        // console.log(COLORS);
        
        tries++;
        check();

    } else {

    }
});    

function check() {
    let isPerfectMatch = true;
    for(let i = 0; i < choicesArray.length; i++) {
        if (choicesArray[i] !== targets[i]) {
            isPerfectMatch = false;
            break;
        }
    }
    if (isPerfectMatch) {
        isGameOver = true;
        gameWinningMessage.innerHTML = "Tu as trouvé la bonne combinaison !";
        board.appendChild(gameWinningMessage);
    }
    if (tries > 9 && !isPerfectMatch) {
        isGameOver = true;
        gameOverMessage.innerHTML = `Perdu ! La bonne combinaison était : ${targets.join(", ")}`;
        board.appendChild(gameOverMessage);
    }
}

function resetGame() {
    colorsToGuess();
}

function deleteChoices() {

}
