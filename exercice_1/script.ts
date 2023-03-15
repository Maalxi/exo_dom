// Exercice 1

// Récupérer l'element du DOM contenant la phrase "Cible moi 🎯" à l'aide d'un getElementById
// Affichez l'element dans la console

function exercie1() {
  const exercice1: HTMLElement | null = document.getElementById("exercice_1");

  console.log(typeof exercice1);
  console.log(exercice1);
}

exercie1();

// Exercice 2

// Récupérer les elements du DOM contenant la phrase "Cible moi 🎯" à l'aide d'une getElementsByClassName
// Affichez les elements dans la console

function exercie2() {
  const exercice2: HTMLCollectionOf<Element> =
    document.getElementsByClassName("exercice2");

  // if (exercice2) {
  //   for (let i = 0; i < exercice2.length; i++) {
  //     exercice2[i].addEventListener("click", getClickEvent);
  //   }
  //   function getClickEvent() {
  //     console.log("event fired !!!");
  //   }
  // }

  console.log(typeof exercice2);
  console.log(exercice2);
}

exercie2();

// Exercice 3

// Écouter le click de l'utilisateur sur le bouton "Hello !" à l'aide d'un eventListener
// À chaque click vous afficherez "Hey dude!" dans la console

function exercice3() {
  const exercice3: Element | null = document.querySelector(".box > .button");

  if (exercice3) {
    exercice3.addEventListener("click", getClickEvent);
    function getClickEvent(): void {
      console.log("Hey dude!");
    }
  }
}

exercice3();

// Exercice 4

// Écouter le click de l'utilisateur sur les boutons "+" et "-"
// À chaque click vous augmenterez / diminuerez une variable contenant un chiffre et l'afficherez dans la console

let count: number = 0;

const Buttonplus: HTMLElement | null =
  document.getElementById("incrementButton");
const Buttonmoins: HTMLElement | null =
  document.getElementById("decrementButton");

function exercice4(event) {
  const buttonType: string = event.target.id;

  if (buttonType === "incrementButton") {
    count++;
  } else if (buttonType === "decrementButton") {
    count--;
  }

  console.log(count);
}

if (Buttonplus && Buttonmoins) {
  Buttonplus.addEventListener("click", exercice4);
  Buttonmoins.addEventListener("click", exercice4);
}

// Exercice 5.1

// Écouter le text saisi par l'utilisateur dans l'input
// À chaque modification vous afficherez la valeur de l'input dans la console

// Exercice 5.2

// Remplacer le paragraph contenant "Remplacer par la saisie de l'utilisateur" par la valeur de l'input en direct

const inputTextExo5: HTMLElement | null = document.getElementById('inputTextExo5');
const paragraph: Element | null = document.querySelector('.inputWrapper p');

inputTextExo5.addEventListener('input', () => {
  console.log(inputTextExo5.value);
  paragraph.textContent = inputTextExo5.value;
});


