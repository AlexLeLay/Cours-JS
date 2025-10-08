// Exemples de variables

let jambon = "Jambon"; // variable modifiable
const pi = 3.1415926;  // constante (non modifiable)
var age = 25;          // variable modifiable à fort taux d'érreurs NE SURTOUT PAS L'UTILISER !!!!

// Les règles de déclaration

let a = 12;
console.log(a);
// Ne pas remettre let devant une variable car cela voudrait dire qu'on la redéclare
// pour la modifier il suffit de l'appeler par son nom de de mettre = puis sa nouvelle valeur
a = 4;
console.log(a);

const tau = 6.28318;
console.log(tau);
// Les constantes n'acceptent pas d'autres valeurs que celles décalrées
// tau = 7;
// console.log(tau);
// Les deux lignes ci-dessus feront buger le script

var b = 40;
console.log(b);
var b = "coucou";
console.log(b);
// Les var peuvent être redéclarées, causant de gros problèmes de lisibilité

// Typage Dynamique

let k = "Coucou tu veux voir ma bicyclette ?";
console.log(k);

k = 2000;
console.log(k);


// Types de données

// Les nombres = Number

let q = 2;         // Nombre entier
let p = 45.32      // Nombre virgule flottant
let r = -273.15;   // Nombre négatif
let s = 1/3;       // Fraction
let t = 16_000;    // Autre façon d'écrire un nombre entier


// Les chaînes de caractères = String

const corneille = "Ingrat, rends-moi mon Cid jusques au dernier mot.";
const moliere = 'Votre sang, monsieur, n\'est pas tombé dans de mauvaises mains.';
console.log(moliere);
let blague = `C'est une autruche qui rentre dans un bar...`;

// Les Booléens

const vraie = true;
const jeSuisFaux = false;

// Les tableaux = Array

const eleves = ["Atreucge", "Joconde", 4, true];
console.log(eleves[2]);
console.log(eleves[0]);
console.log(eleves[4]); // On sort des limites du tableau

// Les tableaux n'ont pas d'index négatifs
// Les tableaux commencent toujours par l'index 0 et finissent toujours par l'index taille tableau - 1

// les Undefined

let d;
console.log(d);
// Variable déclarée mais n'a aucune valeur, elle est indéfinie
// ou par exemple eb sirtabt des kulutes 
// ou par exemple en sortant des limites d'un tableau, ou un ciblant un élément HTML mal écrit
// Ce type de données est à éviter absolument

// Les Nulls = Null

let x = null;

// Les objets

const tasse = {
    color: "Rouge",
    material: "Céramique",
    price: 1,
    content_volume: 25
}

const eleve = {
    name: "Jean-Michel",
    age: 18,
    class: "Terminale",
    notes: [13, 18, 19, 2, 16, 15.5]
}

console.log(eleve.name);
// Calcul de la moyenne de Jean-Michel, en codage naif
let moyenne = (eleve.notes[0] + eleve.notes[1] + eleve.notes[2] + eleve.notes[3] + eleve.notes[4] + eleve.notes[5]) / 6;
console.log(moyenne);

// OPERATEUR

// L'affectation
// On donne la valeur de 7 à la variable aa
let aa = 7;

// l'addition
// La valeur 7 est remplacée par 12 + 4 (16)
aa = 12 + 4;

console.log(aa); // donne 16

// L'affectation après addition
// Avec cette écriture on n'écrase pas la valeur mais on ajoute 4 à l'ancienne valeur
aa += 4;
console.log(aa); // donne 20

// la soustraction
let bb = 20 - 4;
console.log(bb);

// L'affectation après soustraction
bb -= 4;
console.log(bb);

// La multiplication
let cc = 5 * 8;
console.log(cc);

// L'affectation après multiplication

cc *= 2;
console.log(cc);

// La division

let dd = 20 / 4;
console.log(dd);

bb /= 2;
console.log(dd);

// Le modulo
let ee = 13 % 5;
console.log(ee);

// exponential

let ff = 3 ** 2;
console.log(ff);

// Les conditions

let gg = 4;
let hh = 4;
let ii = 9;

if (gg == hh) {
    // si la condition est remplie
} else {
    // si la condition n'est pas remplie
}

// égalité non stricte
if (6 == "6") {
    console.log("ça marche");   
}

// égalité stricte, elle vérifie aussi le type
// ici l'égalité est fausse car 6 est un number et "6" une string
if (6 === "6") {
    console.log("ça marche");
} else {
    console.log("ou pas");
    
}

if (eleve.age >= 18) {
    // ici on va faire la concaténation avec le nom de l'élève et un texte descriptif
    console.log(eleve.name + " est bien majeur");
    
    console.log(`${eleve.name} est majeur`);
    
} else {
    // ici concaténation de littéral de gabarit
    console.log(`${eleve.name} n'est pas majeur`);
    
}