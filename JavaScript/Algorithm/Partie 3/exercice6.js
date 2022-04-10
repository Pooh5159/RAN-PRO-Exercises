const nbPersonnes = 3, nbJours = 4
let prixSejour = 0, prixJournee = 1

for(let i = 0 ; i < nbJours ; i++){
    prixSejour = prixSejour + prixJournee
    prixJournee = prixJournee + 2
}

prixSejour = prixSejour + 14
console.log('Prix par personne : ${Math.round(prixSejour / nbPersonnes)}')
