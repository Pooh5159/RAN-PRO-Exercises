// Table de multiplication allant jusqu'à 20x20

// POUR x allant de 1 jusqu'au "nombre de ligne" FAIRE
    // POUR y allant de 1 jusqu'au "nombre de colonne" FAIRE
        // "ligne" = "ligne" + (x*y)
    // FIN POUR
    // Afficher "ligne"
// FIN POUR


for (let ligne = 1; ligne <= 20; ligne ++){
    let resultat = ""
    for (let colonne = 1; colonne <= 20; colonne ++){
        resultat = resultat + (ligne * colonne) + " "
        // resultat += colonne === 20 ? (ligne * colonne) : (ligne + colonne) + " "
    }
    console.log(resultat)
}
