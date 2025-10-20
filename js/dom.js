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

// Récupérer les classes

// Méthode déconseillée

// const pokemons = document.getElementsByClassName("pokemons");
// Methode standard

const pokemons = document.querySelectorAll(".pokemons");
console.log(pokemons);

// Si on sait qu'il n'y a qu'un seul élément d'une classe on peut utiliser :
// querySelector prendra uniquement le premier élément avec de nom de classe

const listPokemon = document.querySelector(".list-pokemon");
console.log(listPokemon);

const colorPokemon = ["#EBAE34","#F5B0D7","#D28953","#D2FAAC","#D7C5D9"];
for (let i = 0; i < colorPokemon.length; i++) {
    pokemons[i].style.color = colorPokemon[i];
}

// Ajouter une classe
// element.classList.add("class");
// Enlever une classe
// element.classList.remove("class");
// Basculer de class
// element.classList.toggle("class");

// // SetTimeout

// setTimeout(function() {
//     console.log("3 secondes se sont écoulées !");
// }, 3000)

// // SetInterval

// setInterval(function() {
//     console.log("1 seconde vient de passer");

// }, 1000)

// clearTimeout

// const timer = setTimeout(function() {
//     console.log("3 secondes se sont écoulées !");
// }, 3000)

// clearTimeout(timer); // C'est plus intéressant dans un évènement

// const interval = setInterval(function() {
//     console.log("1 seconde vient de passer");
// }, 1000)

// clearInterval(interval)


// TP le scroll taquin

const punchlines = [
  "Tu descends plus lentement qu’une mise à jour Windows 🐌",
  "Allez, on se réveille… le bas de la page va pas venir tout seul ! 😴",
  "Tu veux un café pour te motiver ou c’est une stratégie de flemme ? ☕",
  "Je pourrais tricoter un pull pendant que tu scrolles… 🧶",
  "C’est un concours de lenteur ou tu fais ça exprès ? 😅",
  "Encore un effort, c’est pas le Mont Everest non plus ⛰️",
  "Allez courage, même les tortues ont des objectifs ! 🐢",
  "Tu scrolles comme si tu voulais pas savoir la fin 📜",
  "Je vois plus de poussière que de progrès 👀",
  "On dirait que tu scrolles avec les coudes 🦾",
  "Si tu vas plus lentement, on va repartir en 2022… ⏳",
  "Il y a des glaciers qui fondent plus vite que toi 🌍",
  "Même une limace sous calmants serait déjà arrivée 🐌",
  "Tu veux qu’on t’applaudisse pour chaque pixel descendu ? 👏",
  "Tu scrolles en morse ou c’est ton style naturel ? 🧠",
  "Je me demande si t’as pas mis une brique sur la barre d’espace 🤔",
  "T’as le même rythme qu’un fax sous la pluie 📠",
  "On est sur une promenade digestive ou un vrai scroll ? 🍽️",
  "Tu vas finir par t'endormir avant d’y arriver 😴",
  "Il faut que je t’envoie une newsletter pour te motiver ? 📬",
  "Tu scrolles comme si tu testais chaque pixel à la main 🧐",
  "Courage, t’es à deux doigts d’arriver au milieu ! (ou pas...) 😇",
  "Même la barre de chargement d'Internet Explorer est jalouse de ta lenteur 💻",
  "Faut-il t’envoyer une carte au trésor pour trouver le bas ? 🗺️",
  "Si tu scrolles encore plus doucement, je vais devoir appeler ta maman 👩‍👦"
];

// let intervalid = null;

// // Fonction qui va vérifier si nous sommes en bas de page

// function isAtBottom() {
//     // window.innerHeight => correspond à la taille en pixel de votre écran
//     // window.scrollY => position du scroll par rapport à la taille maximale de l'écran
//     // document.body.scrollHeight => 2000vh en pixel
//     // Le -10 est une tolérance
//     return window.innerHeight + window.scrollY >= document.body.scrollHeight -10;
// }

// function startPunchlines() {
//     if (intervalid === null) {
//         intervalid = setInterval(function() {
//             if (!isAtBottom()) {
//                 const random = Math.floor(Math.random() * punchlines.length);
//                 const punchline = punchlines[random];
//                 console.log(punchline);
                
//             } else {
//                 console.log("T'as touché le fond");
//                 stopPunchlines();
//             }

//         }, 1000);
//     }
// }

// function stopPunchlines() {
//     clearInterval(intervalid);
//     intervalid === null;
// }

// startPunchlines();


// Exo

