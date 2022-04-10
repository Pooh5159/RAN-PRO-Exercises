// tir 1 = 1 bonbon
// tir 2 = 2 bonbons + tir 1
// tir 3 = 3 bonbons + tir 2
// tir x = x bonbons + tir précédent

let bonbon = 0

for (let tir = 1; tir <= 50; tir++){
    bonbon = (bonbon + tir)
}

console.log("On gagnera " + bonbon + " bonbons si on réussi 50 lancers de suite.")