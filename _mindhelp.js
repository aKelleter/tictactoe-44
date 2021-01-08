
// Utilisation de la console du navigateur
console.log("Je suis dans jeu.js");

// Déclaration de variables simples
let score = 0;

// Déclaration de variables complexes (tableau associatif)
let personnage = {
    posx: 10,
    posy: 10,
    name: "John"
};

// Déclarer un tableau
let jours = ['lundi', 'mardi', 'mercredi'];
console.log(jours[0]);

 // Ajouter un élément à la fin du tableau
 jours.push("jeudi");

 // Supprimer le dernier élément du tableau
 jours.pop();

console.log(personnage.name);

// Déclaration de fonction
function addNumbers(a,b){
    return a + b;
}

// Les Conditions
// LOGICAL NOT : !
// ET : &&
// OU : ||

if(score >= 0 && score <= 10 ){
    console.log("C'est un petit score");
}else{
    console.log("C'est un bon début");
}

// Les Boucles
for (let index = 0 ; index < 3 ; index++) {
    console.log(index);
}

let index = 10;
do {
    console.log(index);
    index++;
} while (index < 11);

let index2 = 20;
while (index2 < 24) {
    console.log(index2);
    index2++;
}

// La modularité avec l'exploitation de plusieurs ficheirs js (sprites.js)
// La création d'objets
// Voir sprites.js

let monSprite = new Sprite();
monSprite.draw();

// Créer une liste d'objets
let sprites = [];
for (let n = 0 ; n < 5 ; n++) {
    let monSprite = new Sprite(n);
    monSprite.positionne(n * 10 , n * 2)
    sprites.push(monSprite);        
}

// Boucler sur les objets de la liste
sprites.forEach(element => {
    element.draw();
});

// Charger une image
let img = new Image();
img.src = "img/ship.png";