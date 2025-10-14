// // const line ="________________________________________";

// // // // Exemples de variables

// // // let jambon = "Jambon"; // variable modifiable
// // // const pi = 3.1415926;  // constante (non modifiable)
// // // var age = 25;          // variable modifiable à fort taux d'érreurs NE SURTOUT PAS L'UTILISER !!!!

// // // // Les règles de déclaration

// // // let a = 12;
// // // console.log(a);
// // // // Ne pas remettre let devant une variable car cela voudrait dire qu'on la redéclare
// // // // pour la modifier il suffit de l'appeler par son nom de de mettre = puis sa nouvelle valeur
// // // a = 4;
// // // console.log(a);

// // // const tau = 6.28318;
// // // console.log(tau);
// // // // Les constantes n'acceptent pas d'autres valeurs que celles décalrées
// // // // tau = 7;
// // // // console.log(tau);
// // // // Les deux lignes ci-dessus feront buger le script

// // // var b = 40;
// // // console.log(b);
// // // var b = "coucou";
// // // console.log(b);
// // // // Les var peuvent être redéclarées, causant de gros problèmes de lisibilité

// // // // Typage Dynamique

// // // let k = "Coucou tu veux voir ma bicyclette ?";
// // // console.log(k);

// // // k = 2000;
// // // console.log(k);


// // // // Types de données

// // // // Les nombres = Number

// // // let q = 2;         // Nombre entier
// // // let p = 45.32      // Nombre virgule flottant
// // // let r = -273.15;   // Nombre négatif
// // // let s = 1/3;       // Fraction
// // // let t = 16_000;    // Autre façon d'écrire un nombre entier


// // // // Les chaînes de caractères = String

// // // const corneille = "Ingrat, rends-moi mon Cid jusques au dernier mot.";
// // // const moliere = 'Votre sang, monsieur, n\'est pas tombé dans de mauvaises mains.';
// // // console.log(moliere);
// // // let blague = `C'est une autruche qui rentre dans un bar...`;

// // // // Les Booléens

// // // const vraie = true;
// // // const jeSuisFaux = false;

// // // // Les tableaux = Array

// // // const eleves = ["Atreucge", "Joconde", 4, true];
// // // console.log(eleves[2]);
// // // console.log(eleves[0]);
// // // console.log(eleves[4]); // On sort des limites du tableau

// // // // Les tableaux n'ont pas d'index négatifs
// // // // Les tableaux commencent toujours par l'index 0 et finissent toujours par l'index taille tableau - 1

// // // // les Undefined

// // // let d;
// // // console.log(d);
// // // // Variable déclarée mais n'a aucune valeur, elle est indéfinie
// // // // ou par exemple eb sirtabt des kulutes 
// // // // ou par exemple en sortant des limites d'un tableau, ou un ciblant un élément HTML mal écrit
// // // // Ce type de données est à éviter absolument

// // // // Les Nulls = Null

// // // let x = null;

// // // // Les objets

// // // const tasse = {
// // //     color: "Rouge",
// // //     material: "Céramique",
// // //     price: 1,
// // //     content_volume: 25
// // // }

// // // const eleve = {
// // //     name: "Jean-Michel",
// // //     age: 18,
// // //     class: "Terminale",
// // //     notes: [13, 18, 19, 2, 16, 15.5]
// // // }

// // // console.log(eleve.name);
// // // // Calcul de la moyenne de Jean-Michel, en codage naif
// // // let moyenne = (eleve.notes[0] + eleve.notes[1] + eleve.notes[2] + eleve.notes[3] + eleve.notes[4] + eleve.notes[5]) / 6;
// // // console.log(moyenne);

// // // // OPERATEUR

// // // // L'affectation
// // // // On donne la valeur de 7 à la variable aa
// // // let aa = 7;

// // // // l'addition
// // // // La valeur 7 est remplacée par 12 + 4 (16)
// // // aa = 12 + 4;

// // // console.log(aa); // donne 16

// // // // L'affectation après addition
// // // // Avec cette écriture on n'écrase pas la valeur mais on ajoute 4 à l'ancienne valeur
// // // aa += 4;
// // // console.log(aa); // donne 20

// // // // la soustraction
// // // let bb = 20 - 4;
// // // console.log(bb);

// // // // L'affectation après soustraction
// // // bb -= 4;
// // // console.log(bb);

// // // // La multiplication
// // // let cc = 5 * 8;
// // // console.log(cc);

// // // // L'affectation après multiplication

// // // cc *= 2;
// // // console.log(cc);

// // // // La division

// // // let dd = 20 / 4;
// // // console.log(dd);

// // // bb /= 2;
// // // console.log(dd);

// // // // Le modulo
// // // let ee = 13 % 5;
// // // console.log(ee);

// // // // exponential

// // // let ff = 3 ** 2;
// // // console.log(ff);

// // // // Les conditions

// // // let gg = 4;
// // // let hh = 4;
// // // let ii = 9;

// // // if (gg == hh) {
// // //     // si la condition est remplie
// // // } else {
// // //     // si la condition n'est pas remplie
// // // }

// // // // égalité non stricte
// // // if (6 == "6") {
// // //     console.log("ça marche");   
// // // }

// // // // égalité stricte, elle vérifie aussi le type
// // // // ici l'égalité est fausse car 6 est un number et "6" une string
// // // if (6 === "6") {
// // //     console.log("ça marche");
// // // } else {
// // //     console.log("ou pas");
    
// // // }

// // // if (eleve.age >= 18) {
// // //     // ici on va faire la concaténation avec le nom de l'élève et un texte descriptif
// // //     console.log(eleve.name + " est bien majeur");
    
// // //     console.log(`${eleve.name} est majeur`);
    
// // // } else {
// // //     // ici concaténation de littéral de gabarit
// // //     console.log(`${eleve.name} n'est pas majeur`);
    
// // // }

// // // const ingredients = [];

// // // // Ici on va fabriquer un plan qui permettra de construire plus simplement des ingrédients, on appelle ça le prototypage
// // // class Ingredient {
// // //     constructor(nom, unite, quantite) {
// // //         this.nom = nom;
// // //         this.unite = unite;
// // //         this.quantite = quantite;
// // //     }
// // // }

// // // class Recette {
// // //     constructor(nom_recette, nbr_personnes, etapes, liste_ingredients) {
// // //         this.nom_recette = nom_recette;
// // //         this.nbr_personnes = nbr_personnes;
// // //         this.etapes = etapes;
// // //         this.liste_ingredients = liste_ingredients;
// // //     }
// // // }

// // // // Nouvelle instance d'objet

// // // const sucreDeCanne = new Ingredient("Sucre de canne", "g", 75);
// // // const lait = new Ingredient("Lait", "cl", 25);
// // // const oeufs = new Ingredient("Oeufs", "oeuf(s)", 3);
// // // const pain = new Ingredient("Pain", "tranche(s)", 6);

// // // console.log(sucreDeCanne);

// // // // Je vais donc mettre mes ingrédients dans le tableau ingredients[]

// // // ingredients.push(sucreDeCanne, lait, oeufs, pain)
// // // console.log(ingredients);

// // // const etapes = ["Fouetter les oeufs avec le sucre et le lait.",
// // //                 "Y tremper les tranches de pain.",
// // //                 "Deux solutions pour la cuisson : les cuire à la poêle dans du beurre en les faisant dorer de chaque côté, ou, les cuire au four : beurrer légèrement un plat à gratin, y répartir les tranches, verser le reste du mélange (ajouter du sucre si envie), laisser cuire à 180°C (thermostat 6) jusqu'à que les tranches soient dorées."]

// // // const painPerdu = new Recette("Pain perdu", 4, etapes, ingredients)

// // // console.log(painPerdu);

// // // // LES BOUCLES

// // // console.log("Coucou!");
// // // console.log("Coucou!");
// // // console.log("Coucou!");
// // // console.log("Coucou!");
// // // console.log("Coucou!");


// // // // Imaginons que j'ai besoin d'écrire dans la console
// // // // 0 patate(s) à 2000 patate(s)
// // // // Allons nous écrire à la main 2001 console.log() ?
// // // // Non ! Nous allons utiliser une boucle
// // // // et pour cette exemple nous allongs utiliser la boucle for

// // // for (let i = 0; i <= 2000; i++) {
// // //     console.log(`${i} patate(s)`);
    
// // // }

// // // let n = 0;
// // // while (n < 6) {
// // //     console.log(n + " * 5 est égale à " + n * 5);
// // //     n++;
// // // }

// // // // exo

// // // let nbr = 0;
// // // while (nbr < 10) {
// // //     let random = Math.floor((Math.random() * 101));
// // //     console.log(random);
// // //     nbr++;
// // // }

// // // let password;

// // // do {
// // //     password = prompt("Entrez le mot de passe");
// // // } while (password !== "abc123");

// // // console.log("Oui tu as trouvé le mot de passe");


// // // En simule un lancer de dé qui continue jusqu'à ce que le joueur obtienne 6
// // // On ne peut pas savoir d'avance combien de fois il faudra executer la boucle


// // // let nbr;
// // // let nbr_throw = 0;
// // // do {
// // //     nbr = Math.floor((Math.random() * 6)) + 1;
// // //     console.log(`Résultat du dé : ${nbr}`);
// // //     nbr_throw++;
// // // } while (nbr !== 6)

// // // console.log("Bravo, tu as trouvé un 6 !");
// // // console.log(`nombre de lancers : ${nbr_throw}`);

// // // for (let i = 0; i < 5; i++) {
// // //     console.log(`Compteur Lecornu : ${i}`);
// // // }


// // // boucle for -> traverser les tableaux

// // // let voitures = ["Dacia", "Lada", "Audi", "Daihatsu", "Toyota", "Chevrolet"];

// // // for (let i = 0; i < voitures.length; i++) {
// // //     console.log(voitures[i]);
    
// // // }

// // // boucle for...of

// // // let fruits = ["Pomme", "Banane", "Kiwi", "Avocat", "Durian"];
// // // for (let fruit of fruits) {
// // //     console.log(fruit);
    
// // // }

// // // exercice
// // // Vous allez me créer un ul li dans container

// // const container = document.getElementById("container");
// // const gafam= ["Google","Amazon", "Facebook", "Apple", "Microsoft"];
// // const ul = document.createElement("ul");
// // container.appendChild(ul);
// // for (let brand of gafam) {
// //     const li = document.createElement("li")
// //     li.innerHTML = brand;
// //     ul.appendChild(li);
// // }


// // // boucle for...in

// // const stylo = {
// //     taille: 15,
// //     marque: "Bic",
// //     couleur: "#0FF",
// //     aEncoreSonCapuchon: true
// // }

// // const penContainer = document.getElementById("pen-container");
// // const ulPen = document.createElement("ul");
// // penContainer.appendChild(ulPen);


// // // Pour chaque clé dans stylo
// // for (let cle in stylo) {
// //     // On récupère la valeur liée à la clé
// //     let value = stylo[cle];
// //     // console.log(value);
// //     // On va créer un li pour chaque clé dans l'objet
// //     let li = document.createElement("li");
// //     // Ici c'est un exemple de littéral de gabarit qui facilite l'écriture des concaténations
// //     // Obligatoirement guillements du 7 ``
// //     li.innerHTML = `<span class='cyan'>${cle}</span>: ${value}`;
// //     // Le li créé est accroché à l'ul
// //     ulPen.appendChild(li);
    
// // }

// // // Break

// // for (let i = 0; i < 10; i++) {
// //     if (i === 5) {
// //         break
// //     }
// //     console.log(i);
// // }

// // // continue
// // // Imaginons que l'on veut récupérer uniqument les nombres impairs générés par une boucle for

// // for (let i = 0; i < 10; i++) {
// //     if (i % 2 === 0) {
// //         continue
// //     }
// //     console.log(i);   
// // }

// // // Exo continue

// // const utilisateurs = [
// //     {nom: "Alice", actif: true},
// //     {nom: "Bob", actif: false},
// //     {nom: "Charlie", actif: true},
// //     {nom: "David", actif: false}
// // ];

// // const newUser = {nom: "Hubert", actif: false};
// // utilisateurs.splice(0, 0, newUser);

// // // Dans un console.log() et avec une boucle et un continue, filtrez-moi les utilisateurs inactifs
// // // dans le console.log() on doit lire "Utilisteur actif : Alice" etc
// // console.log(utilisateurs);

// // for (let utilisateur of utilisateurs) {
// //     let isActive = utilisateur.actif;
// //     if (!isActive) {
// //         continue
// //     }
// //     console.log(`Utilistateur actif : ${utilisateur.nom}`);
// // }

// // // Exo 2 continue

// // const panier = [
// //     {nom: "Chaise", stock: 0},
// //     {nom: "Clavier", stock: 5},
// //     {nom: "Souris", stock: 0},
// //     {nom: "Écran", stock: 3},
// //     {nom: "Casque", stock: 0},
// //     {nom: "Webcam", stock: 2}
// // ]

// // for (let item of panier) {
// //     if (item.stock === 0) {
// //         continue
// //     }
// //     console.log(item.nom);
// //     break
// // }


// // // Avec une boucle while, cherchez le premier multiple de 7 dans le tableau donné, la boucle s'arrête dès qu'il trouve ce multiple

// // const nbrs = [2, 1, 9, 13, 14, 8, 74];
// // let n = 0;

// // while (n < nbrs.length) {
// //     if (nbrs[n] % 7 === 0) {
// //         console.log(nbrs[n]);
// //         break
// //     }
// //     n++
// // }

// // console.log(line);


// // // while (n < nbrs.length && nbrs[n] % 7 !== 0) {
// // //     console.log(nbrs[n + 1]);
// // //     n++
// // //     break
// // // }

// // // Écrire un programme qui parcourt un tableau de nombres avec une boucle for
// // // qui va aller chercher le premier nombre pair après un nombre impair
// // // console log les deux valeurs
// // // quand cela est fait ça coupe la boucle

// // const nbrs2 = [2, 18, 46, 19, 25, 14, 18, 9978];

// // for (let i = 0; i < nbrs2.length - 1; i++) {
// //     if (nbrs2[i] % 2 !== 0) {
// //         if (nbrs2[i + 1] % 2 === 0) {
// //             console.log(nbrs2[i]);
// //             console.log(nbrs2[i + 1]);
// //             break
// //         }
// //     }
// // }

// const nombres = [3, 4, 18, 5, 27, 6];
// let trouve = false;

// for (let i = 0; i < nombres.length; i++) {
//     if (nombres[i] % 9 === 0) {
//         console.log("Trouvé :" + nombres[i]);
//         trouve = !trouve;
//         break;
//     }
// }

// if (!trouve) {
//     console.log("Aucun multiple de 9 trouvé");
// }

// LES TABLEAUX

const fruits = ["Pomme", "Banane", "Orange"];

// Supprimer le dernier élément
fruits.pop();
// Supprimer le premier élément
fruits.shift();
// Ajouter un élément en fin de tableau
fruits.push("Fraise");
// Ajouter un élément au début de tableau
fruits.unshift("Melon");
console.log(fruits);


// Autres fonctions utiles
const fruits3 = ["framboise", "tomate", "coing", "poire"];

// Trouver l'index d'un élément

let posFruit = fruits3.indexOf("tomate");
console.log(posFruit);

// Vérifier si un élément est présent
console.log(fruits3.includes("orange"));
// convertir un tableau en chaine de caractères
let saladeDeFruits = fruits3.join(", ");
console.log(saladeDeFruits);

// string

// connaitre la taille d'une string
let mot = "jean-Michel";
console.log(mot.length);
// Attend ?!! length
console.log(mot[3]);
// on vous a menti depuis le début les strings sont ds tableaux

// Pour ajouter par exemple une majuscule au premier élément
const mot2 = mot.charAt(0).toUpperCase() + mot.slice(1);
console.log(mot2);
