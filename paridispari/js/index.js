// Chiedo all'utente di scegliere tra pari o dispari

userChoise = prompt("Scegli i numeri pari o quelli dispari?");
console.log(userChoise);

// Chiedo un umero da 1 a 5 all'utente

userNumber = parseInt(prompt("inserisci un valore da 1 a 5"));
console.log(userNumber);

// Genero un numero casuale da 1 a 5

computerNumber = Math.trunc((Math.random() * 5) + 1);

console.log(computerNumber);

evenOrOdd(userNumber, computerNumber);

function evenOrOdd(userNumber, computerNumber) {

  let sum = userNumber + computerNumber;

  if ((sum % 2 === 0 && userChoise === "pari") || (sum % 2 != 0 && userChoise === "dispari") ) {

    console.log(`La somma \u00E8 ${sum}, l'utente ha vinto`);

  } else {

    console.log(`La somma \u00E8 ${sum}, il computer ha vinto`);

  }

}
