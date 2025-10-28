// Convertir un JSON en objet JavaScript
// On va simuler un fichier JSON

const json = '{"nom": "Jean-Michel", "age": 30}';
// On convertit la string JSON en objet JavaScript
const obj = JSON.parse(json);

console.log(obj.nom);

// Convertir un objet JavaScript en JSON

const user = {
    nom: "Jean-Bon",
    age: 12
}

const jsonObj = JSON.stringify(user);
console.log(jsonObj);


// Les promises
// Écriture simple

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         isFine = true;
//         if(isFine) {
//             resolve("Succès !!!")
//         } else {
//             reject("Erreur !!!")
//         }
//     }, 2000);
// })

// myPromise
//     .then(result => console.log(result))        // si tout va bien
//     .catch(error => console.log(error))         // si une erreur
//     .finally(() => console.log("C'est fini"))   // affiche quoi qu'il arrive

// Exercice : Imaginons qu'on lance une pièce. Il a 50 de chance de tomber sur pile et 50% de chance de tomber sur face
// S'il fait pile, alors c'est une réussite, sinon c'est une erreur
// Pour simuler cette promise on utilisera un setTimeout() de 1s
// Si ça réussit on affiche un console.log(), si ça rate ça affiche console.error()

// const isTails = Math.random() < 0.5 ? true : false;
// // console.log(isHeads);

// const coinFlip = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isTails) {
//             resolve("Pile");
//         } else {
//             reject("Face");
//         }
//     }, 1000);
// })

// coinFlip
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

// function lancerPileOuFace() {
//     return new Promise((resolve, reject) => {
//         // délai de 1 seconde pour simuler un traitement asynchrone
//         setTimeout(() => {
//             if (Math.random() < 0.5) {
//                 resolve(" Pile !");
//             } else {
//                 reject(" Face !");
//             }
//         }, 1000);
//     });
// }

// lancerPileOuFace()
//     .then(resultat => {
//         console.log("Résultat :", resultat); //  Pile !
//         return (lancerPileOuFace())
//     })
//     .then(r => {
//         console.log("Deuxième lancer : " + r);
//     })
//     .catch(erreur => {
//         console.error("Erreur :", erreur);   //  Face !
//     })
//     .finally(() => {
//         console.log("Le lancer est terminé.");
//     });


// AJAX
// Pour faire un AJAX de manière moderne, on utilise l'API fecth()

// const list = document.getElementById("huge-list");

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(d => {
//             const li = document.createElement("li");
//             li.innerHTML = d.title;
//             list.appendChild(li);
//         });
//     })
const fakeHTML = "fxdysejqkhttps://cdn.myanimelist.net/s/common/uploaded_files/1455540405-b2e2bf20e11b68631e8439b44d9a51c7.png"
const regex = /https?:\/\/[^"'\s>]+?.(?:jpg|jpeg|png|gif|webp|svg)/g;
const found = fakeHTML.match(regex);

const aled = document.getElementById("aled")

fetch("https://www.onetacosverdun.com/")
    .then(response => response.text())
    .then(data => {
        // console.log(data);
        const images = data.match(regex)
        // console.log(images);
        
        images.forEach(img => {
            const imgEl = document.createElement("img");
            imgEl.src = img;

            aled.appendChild(imgEl)
        });
        
    })