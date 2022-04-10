let sexe = "Homme".toLowerCase()
let age = 21

    if (sexe == "homme" && age > 20) {
        resultat = "Imposable"
    }

    else if (sexe == "femme" && age >= 18 && age <= 35) {
        resultat = "Imposable"
    }

    else {
        resultat = " Non imposable"
    }

console.log(resultat);