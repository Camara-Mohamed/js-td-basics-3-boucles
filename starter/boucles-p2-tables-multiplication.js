/* BOUCLES - PRÉPA 2 : Plusieurs tables de multiplication
Affichez les x premières valeurs des n premières tables de multiplication :
1. Demandez à l'utilisateur de choisir quelles tables de multiplication il souhaite afficher.
   Le message pourrait être : "Je peux vous afficher les n premières tables de multiplication.
   Dites-moi à laquelle vous souhaitez que je m'arrête. Par exemple, si vous entrez 4,
   je vous afficherai les tables de multiplication par 1, par 2, par 3 et par 4.
   Jusqu'à quelle table voulez-vous que j'aille ?"
2. Demandez-lui combien de valeurs il souhaite voir pour chacune des tables.
   Le message pourrait être : "Combien de valeurs souhaitez-vous que j'affiche
   pour chacune de ces tables ?"
3. Affichez un message qui résume la demande de l'utilisateur :
   "OK, je vais vous afficher les … premières valeurs des … premières tables de multiplication."
4. Affichez ensuite le résultat avec, pour chacune des tables, un titre
   "Voici les … premières valeurs de la table de multiplication par …"
*/
// Commencez par demander à l'utilisateur jusqu'à quelle table de multiplication il souhaite aller et combien de valeurs il souhaite afficher pour chaque table.
// Ensuite, utilisez une ou plusieurs boucles pour calculer et afficher les x premières valeurs des n premières tables de multiplication.

let numberTables = parseInt(prompt("Jusqu'à quelle table voulez-vous que j'aille ?"));
let valeurs = parseInt(prompt("Combien de valeurs souhaitez-vous que j'affiche pour chacune de ces numberTables ?"));

console.log(`OK, je vais vous afficher les ${valeurs} premières valeurs des ${numberTables} premières numberTables de multiplication.`);

if (numberTables && valeurs) {
    if (numberTables > 0 && valeurs > 0) {
        for (let i = 1; i <= numberTables; i++) {
            console.log(`Voici les ${valeurs} premières valeurs de la table de multiplication par ${i} :`);
            for (let j = 1; j <= valeurs; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }
        }
    } else {
        console.log(`Entrer un nombre positif !`);
    }
} else {
    console.log(`Entrer un nombre !`);
}

