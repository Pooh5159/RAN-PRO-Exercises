let heure = 3
let minute = 8
let seconde = 5

seconde = seconde + 1
if (seconde === 60){
    minute = minute + 1
    seconde = 0
} if (minute === 60){
    heure = heure + 1
    minute = 0
} if (heure === 24){
    heure = 0
}

seconde = seconde < 10 ? "0" + seconde : seconde
minute = minute < 10 ? "0" + minute : minute
heure = heure < 10 ? "0" + heure : heure

console.log(heure, minute, seconde)