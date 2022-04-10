// Algo lisant une suite n de prix entier des achats + calcul montant, lecture montant et remise monnaie

let prix = 0, rendu = 0, montant = 0, somme = 0, argent = 0
let input = ""

while (input !== "total") {
    input = prompt("Veuillez saisir un prix ou 'total' pour quitter")
    if (!isNaN(input)) {
        input = parseInt(input, 10)
        somme += input
    }
    if (input !== "total" && isNaN(input)) {
        console.log("Désolé, je n'ai pas compris votre instruction")
    }
}
console.log(`La somme à payer est de ${somme}€`)

while (argent < somme || isNaN(argent)) {
    argent = prompt("Veuillez saisir l'argent donné")
    if (isNaN(argent)) {
        console.log("Je n'ai pas compris votre instruction")
    }
    if (argent < somme) {
        console.log("Veuillez donner plus d'argent")
    }
    if (argent >= somme) {
        argent = parseInt(argent, 10)
        console.log(`Vous avez donné ${argent}€`)
    }
}

rendu = argent - somme

// Argent à rendre : billets 500€ 200€ 100€ 50€ 20€ 10€ 5€ + pièces 2€ 1€

const ARGENT = [500, 200, 100, 50, 20, 10, 5, 2, 1]
const NOM = ['billet(s) de 500€', 'billet(s) de 200€', 'billet(s) de 100€', 'billet(s) de 50€', 'billet(s) de 20€', 'billet(s) de 10€', 'billet(s) de 5€', 'pièces(s) de 2€', 'pièces(s) de 1€']
let renduArgent = ""
let nbArgent = ""

for (let i = 0; i < ARGENT.length; i++) {
    if (rendu != 0) {
        if (rendu - ARGENT[i] >= 0) {
            nbArgent = (rendu - (rendu % ARGENT[i])) / ARGENT[i]
            rendu = rendu % ARGENT[i]
            renduArgent += ` ${nbArgent} x ${NOM[i]},`
        }
    }
    if (rendu === 0) {
        break;
    }
}
if (argent === somme){
    renduArgent = " rien, le compte est bon. "
}
renduArgent = renduArgent.substring(0, renduArgent.length - 1);
console.log(`Votre rendu est de${renduArgent}`);