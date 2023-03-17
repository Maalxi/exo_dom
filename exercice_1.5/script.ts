// Exercice 1

// Lorsque l'utilisateur clique sur le bouton vous ajoutez la class "green" au carré

const square_exo1: Element | null = document.querySelector(".square_empty");
const button_exo1: HTMLButtonElement | null = document.querySelector("button");

button_exo1.addEventListener("click", () => {
  square_exo1.classList.add("green");
});

// Exercice 2

// Lorsque l'utilisateur clique sur le bouton :
// - Si le carré est couleur coral, vous enlevez la class "coral" et ajoutez la class "green"
// - Si le carré est couleur green, vous enlevez la class "green" et ajoutez la class "coral"

const square: Element | null = document.querySelector(".coral");
const button: HTMLButtonElement | null = document.querySelector(".button2");

button.addEventListener("click", () => {
  if (square.classList.contains("coral")) {
    square.classList.remove("coral");
    square.classList.add("green");
  } else if (square.classList.contains("green")) {
    square.classList.remove("green");
    square.classList.add("coral");
  }
});

// Exercice 3

// Lorsque l'utilisateur clique sur le bouton vous récuperez la valeur de l'input
// Selon la réponse de l'utilisateur vous remplacez le text "Votre réponse est ..." du paragraphe par "Bonne" ou "Mauvaise"

const input: HTMLInputElement | null = document.querySelector(".input_exo3");
const responseText: HTMLElement | null = document.querySelector("#response-text");
const submitBtn: HTMLButtonElement | null = document.querySelector("#submit-btn");

// Ajout d'un événement sur le bouton de soumission
submitBtn.addEventListener("click", function () {
  // Récupération de la valeur de l'input
  const userAnswer = input.value;

  // Vérification de la réponse de l'utilisateur
  if (userAnswer === "4") {
    // Si la réponse est correcte, on affiche "Bonne"
    responseText.textContent = "Bonne";
  } else {
    // Sinon, on affiche "Mauvaise"
    responseText.textContent = "Mauvaise";
  }
});

// Exercice 4

// Lorsque l'utilisateur clique sur un carré coral celui-ci devient vert et les autres coral
// Si l'utilisateur clique sur un carré vert, il ne se passe rien


const coralSquares = document.querySelectorAll('.coral');

for (let i = 0; i < coralSquares.length; i++) {
  const square = coralSquares[i] as HTMLElement;
  
  square.addEventListener('click', () => {
    if (square.classList.contains('coral')) {
      square.classList.remove('coral');
      square.classList.add('green');
      
      for (let j = 0; j < coralSquares.length; j++) {
        const otherSquare = coralSquares[j] as HTMLElement;
        if (otherSquare !== square) {
          otherSquare.classList.remove('green');
          otherSquare.classList.add('coral');

          for (let o = 0; o < coralSquares.length; o++) {
            const currentSquare = coralSquares[o]

            if (currentSquare === square) {
              console.log('on exclu le carre suivant :')
              console.log(currentSquare)
            } else {

              if (currentSquare.classList.contains('green')) {
                  currentSquare.classList.remove('green')
                  currentSquare.classList.add('coral')
              }
            }
          }
        }
      }
    }
  });
}
// Exercie 5

// Lorsque l'utilisateur selectionne une liste, replacez la liste bidon par les membres de l'équipe sélectionnée

const equipeA: string[] = ["Martin", "Lucie", "Jasmine"];
const equipeB: string[] = ["Lisa", "Mathieu", "Anthony"];
const equipeC: string[] = ["Anissa", "Laïla", "Jean-Paul"];

const boutonA = document.getElementById("equipeA");
boutonA.addEventListener("click", () => {
  afficherEquipe(equipeA);
});

const boutonB = document.getElementById("equipeB");
boutonB.addEventListener("click", () => {
  afficherEquipe(equipeB);
});

const boutonC = document.getElementById("equipeC");
boutonC.addEventListener("click", () => {
  afficherEquipe(equipeC);
});

function afficherEquipe(equipe) {
  const liste = document.getElementById("liste");
  liste.innerHTML = "";
  equipe.forEach((membre) => {
    const li = document.createElement("li");
    li.textContent = membre;
    liste.appendChild(li);
  });
}