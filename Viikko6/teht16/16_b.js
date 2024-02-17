// Tee Javascriptilla ohjelma, joka tutkii, 
// onko annettu sana palindromi. 
// Palindromi on sana, joka on sama etu- ja takaperin. 
// Esimerkiksi saippuakauppias. 
// Välilyöntejä ei tarvitse käsitellä, eli syötteenä vain yksi sana.

const prompt = require('prompt-sync')();

function onkoPalindromi() 
{
    let alkpSana = prompt("Syötä sana, jonka haluat tarkistaa: ");
    
    // Muutetaan syöte pieniksi kirjaimiksi ja poistetaan välilyönnit
    let sana = alkpSana.toLowerCase().replace(/ /g, '');
    
    // Käännetään sana ympäri
    let kaannettySana = sana.split('').reverse().join('');
    
    // Vertaillaan alkuperäistä ja käännettyä sanaa
    if (sana === kaannettySana) 
    { return alkpSana + " on palindromi."; } 
    
    else 
    { return alkpSana + " ei ole palindromi."; }
}

console.log(onkoPalindromi());
