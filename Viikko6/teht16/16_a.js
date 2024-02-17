//Tee Javascriptilla ohjelma, joka kysyy käyttäjältä kaksi lukua ja ilmoittaa niistä suuremman.
const prompt = require('prompt-sync')();

function compare()
{
    let L1 = prompt("Syötä ensimmäinen luku:");
    L1 = parseFloat(L1);

    let L2 = prompt("Syötä toinen luku:");
    L2 = parseFloat(L2);

// Tarkistetaan, kumpi luvuista on suurempi
    if (L1 > L2) 
    { console.log(L1 + " on suurempi kuin " + L2 + "."); } 

    else if (L2 > L1)
    { console.log(L2 + " on suurempi kuin " + L1 + "."); } 
    
    else 
    { console.log("Luvut ovat yhtä suuret."); }
}

console.log(compare());