const title = document.getElementById("title");
console.log(title);
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let clickNumber = document.getElementById("click-number");

console.log(btn);

// Évènement avec fonction fléchée à éviter

// btn.addEventListener("click", () => {
//     title.innerHTML = "blblblblbl";
// })

// Évènement avec fonction anonyme

btn.addEventListener("click", function() {
    title.innerHTML = "blblblblbl";
})


let click = 0;
btn2.addEventListener("click", function() {
    click++; // est équivalent à click += 1
    clickNumber.innerHTML = click;
})

btn3.addEventListener("click", function() {
    click--; // est équivalent à click -= 1
    clickNumber.innerHTML = click;
})

// Avec les inputs

const inputText = document.getElementById("input-text");
const input1 = document.getElementById("input1");

input1.value = "";
input1.addEventListener("input", function() {
    // console.log(this)
    let valueInput = this.value;
    inputText.innerHTML = valueInput;
})

// Hierarchie

const mom = document.getElementById("mom");

// childNodes
// Récupérer tous les éléments/noeuds (même le texte)
console.log(mom.childNodes);
console.log(mom.childNodes[5].childNodes);
console.log(mom.childNodes[5].childNodes[1].childNodes);

// children
// Récupère tous les éléments enfants directs de mom (sans texte)
console.log(mom.children);

// first child (prend le texte en compte)
console.log(mom.firstChild);

// firstElementChild

console.log(mom.firstElementChild);

// On va supprimer le premier li de mom

console.log(mom.children[2].firstElementChild.firstElementChild.remove());

// creation d'un element

let img = document.createElement("img");
// on modifie son src
img.src = "https://previews.123rf.com/images/captainimages/captainimages1403/captainimages140300222/26708972-close-up-of-one-piece-of-fried-potato-chips-isolated-on-white-background.jpg";
img.alt = "Une belle chips";
img.style.width = "200px";
img.style.height = "auto"
// Maintenant que l'on a construit notre page, on peut "l'accrocher" à un élément mais en tant qu'enfant
mom.appendChild(img);