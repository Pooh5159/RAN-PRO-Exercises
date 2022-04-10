let age = 26
let permis = 4
let accident = 0
let souscription = 2


    if (age <= 25 && permis <= 2 && accident === 0){
        resultat = "Tarif rouge"
    } else if (age <= 25 && permis <= 2 && accident === 0 && souscription > 1){
        resultat = "Tarif orange"
    } else if (age <= 25 && permis > 2 && accident === 0 || age > 25 && permis <= 2 && accident === 0){
        resultat = "Tarif orange"
    } else if (age <= 25 && permis > 2 && accident === 1 || age > 25 && permis <= 2 && accident === 1){
        resultat = "Tarif rouge"
    } else if(age <= 25 && permis > 2 && accident === 0 && souscription > 1 || age > 25 && permis <= 2 && accident === 0 && souscription > 1){
        resultat = "Tarif vert"
    } else if (age <= 25 && permis > 2 && accident === 1 && souscription > 1 || age > 25 && permis <= 2 && accident === 1 && souscription > 1){
        resultat = "Tarif orange"
    } else if (age > 25 && permis > 2 && accident === 0){
        resultat = "Tarif vert"
    } else if (age > 25 && permis > 2 && accident === 1){
        resultat = "Tarif orange"
    } else if (age > 25 && permis > 2 && accident === 2){
        resultat = "Tarif rouge"
    } else if (age > 25 && permis > 2 && accident === 0 && souscription > 1){
        resultat = "Tarif bleu"
    } else if (age > 25 && permis > 2 && accident === 1 && souscription > 1){
        resultat = "Tarif vert"
    } else if (age > 25 && permis > 2 && accident === 2 && souscription > 1){
        resultat = "Tarif orange"
    } else {
        resultat = "Non assurable"
    }

console.log(resultat)