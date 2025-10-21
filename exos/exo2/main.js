const remainingList = document.getElementById("remaining");
const doneList = document.getElementById("done");
const next = document.getElementById("next");

const remainingTitle = document.getElementById("remaining-title");


let remainingArray = [
    "Jean-Michel",
    "Gerturde",
    "Renaud",
    "Anthony",
    "Eugène",
    "Ernest",
    "Honoré",
    "Maurice",
    "Noël",
    "Raoul"
];
const remainingArrayCopy = remainingArray.slice()

let doneArray = [];

function display() {
    next.innerHTML = "Suivant -->";
    for (let i = 0; i < remainingArray.length ;i++){
        const li = document.createElement("li");
        li.innerHTML = remainingArray[i];
        remainingList.appendChild(li);
    }
    if (doneArray.length > 0) {
        const p = document.createElement("p");
        p.innerHTML = doneArray[0];
        doneList.appendChild(p);        
    }
    if (remainingArray.length === 0) {
        next.innerHTML = "Reset";
        remainingArray = remainingArrayCopy.slice()
    }
}

display();

next.addEventListener("click", function() {
    if (remainingArray.length !== 0) {
        remainingList.innerHTML = "";
        doneList.innerHTML = "";
        const random = Math.floor(Math.random() * remainingArray.length);
        const randomItem = remainingArray.splice(random, 1);
        doneArray.unshift(randomItem);
    }

    display();
})
