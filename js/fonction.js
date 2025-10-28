const panier = [
    {name: "Pomme", price: 2, quantity: 5},
    {name: "Kiwi", price: 1, quantity: 50},
    {name: "Mangue", price: 9, quantity: 25}
]

// Fonction qui additionne deux nombres
// C'est une fonction utilitaire

function add(nbrA, nbrB) {
    return nbrA + nbrB;
}

// autre fonction utilitaire

function multiply(nbrA, nbrB) {
    return nbrA * nbrB;
}

// fonction principale qui va calculer le prix total du panier

function calculateCartPrice(cart) {
    // Avant de calculer il faut initialiser le total
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        // Pour faciliter la lecture on renomme l'élément actuel de la boucle
        // par une variable plus simple à écrire
        const item = cart[i];
        // Le return de la fonction multiply() 'injecte' son résultat dans itemPrice
        const itemPrice = multiply(item.price, item.quantity);
        total = add(total, itemPrice);
    }
    return total
}

// console.log(calculateCartPrice(panier));

// faire une fonction qui retourne le nombre de voyelles dans un mot mis en paramètres

// exemple console.log(compterVoyelles("bonjour")); => 3

const voyelles = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
let voyellesNbr = 0;

function compterVoyelles(mot) {
    for (let i = 0; i < mot.length; i++) {
        const lettre = mot[i];
        
        if (voyelles.includes(lettre)) {
            voyellesNbr += 1;
        }
    }
    return voyellesNbr
}

// console.log(compterVoyelles("Paragraphe"));

// Faire une fonction qui prend en paramètre un tableau de nombre
// et retourne le nombre le plus grand du tableau

const array1 = [3, 7, 2, 9, 5];
const array2 = [-5, -2, -10];

function max(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

// console.log(max(array1));
// console.log(max(array2));

// === ÉNONCÉ ===

// Ajouter un champ de texte (input), un bouton "Ajouter" et une liste <ul> directement dans le HTML.
// Donner un id à chacun de ces éléments pour pouvoir les manipuler en JavaScript.

// Quand l'utilisateur saisit du texte dans l'input et clique sur le bouton,
// cela doit créer un nouvel élément <li> contenant le texte saisi,
// et l'ajouter à la liste <ul> affichée à l'écran.

// Le texte saisi doit aussi être ajouté dans un tableau JavaScript.
// À chaque modification du tableau, la liste <ul> doit être regénérée
// (c’est-à-dire qu’on affiche tous les <li> du tableau, pas seulement le dernier ajouté).

// BONUS : le fait d’appuyer sur la touche "Entrée" doit avoir le même effet
// que de cliquer sur le bouton.


// const btn = document.getElementById("btn");
// const list = document.getElementById("list");
// const input = document.getElementById("input");
// input.value = "";
// const textes = []

// function pushToArray() {
//     let texte = input.value;
//     textes.push(texte);
// }

// function addToList() {
//     list.innerHTML = "";
//     console.log(textes);
    
//     for (let i = 0; i < textes.length; i++) {        
//         const li = document.createElement("li");
//         li.innerHTML = textes[i];
//         list.appendChild(li);
//     }
// }

// btn.addEventListener("click", function(){    
//     pushToArray();
//     addToList();
//     input.value = "";
// });

// document.addEventListener("keydown", function(e) {
//     console.count();
    
//     if (e.code === "Enter") {
//         pushToArray();
//         addToList();
//         input.value = "";
//     }
// })

// Fonctions fléchées

// function add(nbrA, nbrB) {
//     return nbrA + nbrB;
// }

let sum = (a, b) => a + b;
console.log(sum(12,15)); // 27
// Quand il n'y a qu'un paramètre, les parenthèses sont facultatives
let double = a => a * 2;
console.log(double(140)); // 280

let calc = (a, b, c) => {
    let d = a * b;
    return d - c;
}

console.log(calc(14,2,12)); // 16


// autre exemple

let maj = str => str.toUpperCase();

console.log(maj("coucou"));

// Problème avec this

// exemple normal

// function arrow() {
//     document.addEventListener("click", function() {
//         console.log(this);
//     })
// }

let arrow = () => {
    document.addEventListener("click", () => {
        console.log(this);
    })
}

arrow();

const btnArrow = document.getElementById("btn-arrow");

btnArrow.addEventListener("click", () => {
    console.log(this);
})