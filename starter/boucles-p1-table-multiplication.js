/* BOUCLES - PRÉPA 1 : Une table de multiplication
Affichez les x premières valeurs de la table de multiplication choisie par l'utilisateur.
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
   "Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"
2. Demandez-lui combien de valeurs il souhaite voir pour cette table :
   "Combien de valeurs souhaitez-vous afficher pour cette table ?"
3. Affichez le résultat avec un titre :
   "Voici les … premières valeurs de la table de multiplication par … :"
N.B. Faites-le de deux manières différentes :
   1°) avec une boucle FOR
   2°) avec une boucle WHILE
*/

let table = parseInt(prompt("Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par :"));
let valeurs = parseInt(prompt("Combien de valeurs souhaitez-vous afficher pour cette table ?"));

console.log(`Voici les ${valeurs} premières valeurs de la table de multiplication par ${table} :`);

// avec FOR
// Commencez par demander à l'utilisateur la table de multiplication souhaitée et le nombre de valeurs à afficher
// Ensuite, utilisez une boucle FOR pour calculer et afficher les x premières valeurs de la table de multiplication

if (table && valeurs) {
    if (table > 0 && valeurs > 0) {
        for (let i = 1; i <= valeurs; i++) {
            console.log(`${table} x ${i} = ${table * i}`);
        }
    } else {
        console.log(`Entrer un nombre positif !`);
    }
} else {
    console.log(`Entrer un nombre !`);
}

// avec WHILE
// Répétez le même processus avec une boucle WHILE, en demandant à nouveau la table de multiplication et le nombre de valeurs

/*
if (table && valeurs) {
    if (table > 0 && valeurs > 0) {
        let i = 1;
        while (i <= valeurs) {
            console.log(`${table} x ${i} = ${table * i}`);
            i++;
        }
    } else {
        console.log(`Entrer un nombre positif !`);
    }
} else {
    console.log(`Entrer un nombre !`);
}*/
