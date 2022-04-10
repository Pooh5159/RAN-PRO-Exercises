let age, persmis, accident, fidelisation
let tarif = ""

const ageOK = age > 25
const permisOK = permis > 2

// Condition tarif
const rouge = (!ageOK && !permisOK)
const orange = (!ageOK && permisOK) || (ageOK && !permisOK)
const vert = (ageOK && permisOK)


if(rouge){
    if(accident < 1){
        tarif = "rouge"
    } else {
        tarif = "refusé"
    }
} else if(orange){
    if(accident >= 2){
        tarif = "refusé"
    } else if(accident >= 1){
        tarif = "rouge"
    } else {
        tarif = "orange"
    }
} else{
    if(accident >=3){
        tarif = "refusé"
    } else if(accident >=2){
        tarif = "rouge"
    } else if(accident >=1){
        tarif = "orange"
    } else{
        tarif = "vert"
    }
}

if(fidelisation > 1 && tarif != "refusé") {
    if (tarif === "rouge"){
        tarif = "orange"
    } else if (tarif === "orange"){
        tarif = "vert"
    } else {
        tarif = "bleus"
    }
}