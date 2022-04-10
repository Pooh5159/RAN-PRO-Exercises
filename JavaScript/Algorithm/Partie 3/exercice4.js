// base = 17*17*17 = 4913 petits cubes
// 1er étage = 15*15*15 = 3375 petits cuebs
// 2e étage = 13*13*13 = 2197 petits cubes
// xe étage = x*x*x = x petits cubes
// dernier étage = 1*1*1 = 1 petit cube

let nbcube = 0

for (let cube = 17; cube >= 1; cube-=2){
    nbcube = nbcube + cube**3
}

console.log("Il faudra " + nbcube + " cubes pour constuire la tour")