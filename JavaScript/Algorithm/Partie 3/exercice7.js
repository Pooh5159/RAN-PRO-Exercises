// Calcul et affichage moyen n nombre saisie au clavier

// TANT QUE "c'est vrai" ALORS

// let compteur = 0

// while( compteur === 2){
    // console.log("Instruction" + compteur)
    // compteur++
// }

// do {
    // console.log("Je suis dans la boucle")
    // compteur++
// } while(compteur === 2)

// TANT QUE l'utilisateur n'a pas saisi "exit" ALORS
    // lui demander de saisir un nombre
    // Ajouter le nombre à la somme
    // Incrémenter de 1 le nombre de note
// Afficher(somme/nombre de note)

let somme = 0, moyenne = 0, nb_notes = 0
let input = ""

while(input !== "exit"){
    input = prompt("Veuillez saisir une note ou 'exit' pour quitter")
    if(!isNaN(input)){
        input = parseInt(input, 10)
        somme += input
        nb_notes++
    }
    if(input !== "exit" && isNaN(input)){
        console.log("Désolé, je n'ai pas compris votre instruction")
    }
}

if(nb_notes > 0){
    moyenne = somme/nb_notes
    console.log(`La moyenne est de : ${moyenne}`)
} else {
    console.log("Pas de note, pas de moyenne")
}

