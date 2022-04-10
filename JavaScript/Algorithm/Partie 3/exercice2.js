// 1337 crapaud au départ > nb crapaud 12 semaines
// (1337 * 2)*12 = 5 476 352

let crapaud = 1337

for (let semaine = 1; semaine <= 12; semaine++){
    crapaud = (crapaud * 2)
}

console.log("IL y aura " + crapaud + " crapauds au bout de 12 semaines")