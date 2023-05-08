let check = false;

let word = prompt("Inseri la parola da controllare");

let counter = word.length;

isPalindrome(word);

function isPalindrome(word) {
  
  for (let i = 0; i < word.length; i++ ) {
  

    if(word[i] === word[counter-1]) {
  
      check = true;
      counter--;
  
    } else {
  
      check = false;
      i = word.length;
  
    }
  
  }
  
  if (check) {
  
    return console.log("La parola inserita è palindroma");
  
  } else {

    return console.log("La parola inserita non è palindroma");

  }

}