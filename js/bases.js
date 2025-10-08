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

