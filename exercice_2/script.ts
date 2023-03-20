// Exercice 1

// Récupérez tous les élements du DOM contenant une lettre de l'alphabet
// Vous écouterez le click du l'utilisateur sur chaque element ( boucle ? )
// Lorsque l'utilisateur click sur une lettre faite en sorte que la lettre selectionnée ai un background gris
// Si l'utilisateur re-click sur une touche déjà selectionnée remettez lui un background blanc

// const letters = document.querySelectorAll(".letter");

// letters.forEach((letter) => {

//   letter.addEventListener("click", () => {

//     if (letter.style.backgroundColor === "gray") {
//       letter.style.backgroundColor = "white";
//     } else {
//       letters.forEach((l) => {
//         l.style.backgroundColor = "white";
//       });
//       letter.style.backgroundColor = "gray";
//     }
//   });
// });

// Exercice 2.1

// Vous écouterez le clavier de l'utilisateur
// Si il appuie sur une touche avec une voyelle, affichez "voyelle" dans la console
// Si il appuie sur une touche avec une consonne, affichez "consonne" dans la console
// Si il appuie sur une touch qui n'est ni une voyelle ni une consonne, affichez "Pas dans l'alphabet" dans la console

const letters = document.querySelectorAll<HTMLDivElement>(".letter");

function isVowel(letter: string): boolean {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  return vowels.includes(letter.toLowerCase());
}

function isConsonant(letter: string): boolean {
  return /^[a-zA-Z]$/.test(letter) && !isVowel(letter);
}

letters.forEach((letter) => {
  letter.addEventListener("click", () => {
    const clickedLetter: string | null = letter.textContent;
    if (clickedLetter !== null) {
      if (isVowel(clickedLetter)) {
        console.log("voyelle");
      } else if (isConsonant(clickedLetter)) {
        console.log("consonne");
      } else {
        console.log("Pas dans l'alphabet");
      }
      if (letter.style.backgroundColor === "red") {
        letter.style.backgroundColor = "white";
      } else {
        letters.forEach((l) => {
          l.style.backgroundColor = "white";
        });
        letter.style.backgroundColor = "red";
      }
    }
  });
});

// Exercice 2.2

// Lorsque l'utilisateur appuie sur une touche qui est une lettre de l'alphabet,
// appliquez la même logique que lorsqu'il click sur une lettre de l'alphabet ( background rouge ... )
