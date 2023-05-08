
// Richiedo all'untente di inesrire una parola

let word = prompt("Inseri la parola da controllare");

// assegno la lunghezza della parola e check per il controllo della stringa

let counter = word.length;
let check = false;

// richiamo la funzione 

isPalindrome(word);

// funzione che controlla se la parola inserita dall'utente è palindorma o meno

function isPalindrome(word) {
  
  for (let i = 0; i < word.length; i++ ) {
  

    if(word[i] === word[counter-1]) {

      check = true;
      counter--;
  
    } else {

      check = false;
      i = word.length;
      return console.log("La parola inserita non è palindroma");
    }
  
  }
  
  if (check) {
  
    return console.log("La parola inserita è palindroma");
  
  }

}