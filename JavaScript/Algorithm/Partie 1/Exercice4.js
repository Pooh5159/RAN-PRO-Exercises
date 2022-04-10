let baton1 = 17
let baton2 = 7
let baton3 = 5
let baton4 = 2

let longueur = (baton1 * 5) + (baton2 * 2) + baton3 + (baton4 * 2)

let surface = (longueur * longueur)
let perimetre = (longueur * 4)

let phrase = `La surface est de ${surface}
Le périmètre est de ${perimetre}`

console.log(phrase)