// fetch('http://game01-dc03.ouiheberg.com:3000/hangman')
// .then((response) => response.json())
// .then((data) => {      
// });
// Création d'un objet pour récupérer le fichier .json
// let request = new XMLHttpRequest;
// request.open('get', 'assets/scripts/words.json', true);
// request.responseType='json';
// request.send()
// request.onload=function(){
//   let Words = request.response;
// }
// const fs =require('fs');
// fs.open('words.json');
// import json from './words.json';
// console.log(json);
// const word=[''];

// Tableaux de mots
const word = ["chaise","table","fraise","veau","pain","souris","tartine","hamburger","tortue","baguette","ordinateur","donjon","tacos","clavier","lettre","papier","prince","princesse","complainte","marin","tartiflette"] 
let answer = ''; // variable qui stock les mots du tableau 
let maxError = 7; // Maximum d'erreur
let error = 0; // Nombre d'erreur effectuées
let counterImg = 1; // Compteur d'images
let guessed = []; //
let wordStatus = null; // 

// fetch('/Assets/scripts/words.json').then(response => response.json()).then(data=>{
//   answer = data[0].Words[Math.floor(Math.random()*100)]
//   console.log(answer);
// });

        
        // Fonction qui permet de tirer un mot aléatoirement dans la liste
        function randomWord() {
          answer = word[Math.floor(Math.random() * word.length)];
          console.log(answer);
        }
        // Math.floor(Math.random()*data.data.lenght)
// Création des touches du claviers
function newButtons() {
  // création d'une variable pour la création des touches
  // split sépare les caractères
  // map permet de retrouver des éléments dans leurs ordre d'insértions
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      // Permet d'insérer les caractères ci-dessus et de les stylisés via bootstrap
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

// Fonction motrice du jeu 
function handleGuess(chosenLetter) {
  // " ? " = if ; " : " = else
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);
  document.getElementById(chosenLetter).style.backgroundColor='#4C4476';
  // Permet de grisé les cases déjà sélectionner 
  
  // Fonction qui permet de vérifié si la lettre encodée fait partie du mot
  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
    // sinon, elle rajoute une erreur, upgrade l'image et vérifie si la lettre choisie ne faisait pas partie du mot caché
  } else if (answer.indexOf(chosenLetter) === -1) {
    error++;
    counterImg++;
    updateError();
    checkIfGameLost();
    updateImg();
  }
}

// Fonction qui permet de sauter d'images à chaque erreur
function updateImg() {
  document.getElementById('img').src = '/Assets/Images/pendu_' + counterImg + '.png';
}
// Fonction qui vérifie si la partie est gagnée
function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You win!';
  }
}

// Fonction qui vérifie si la partie est perdue
function checkIfGameLost() {
  if (error === maxError) {
    document.getElementById('secretWord').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lose';
  }
}

// Fonction qui permet de caché les lettre du mot à déviner
function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('secretWord').innerHTML = wordStatus;
}
//
function updateError() {
  document.getElementById('error').innerHTML = error;
}

// Fonction qui permet de relancer le jeu
function reset() {
  counterImg=1;
  error = 0;
  guessed = [];
  document.getElementById('img').src = '/Assets/Images/pendu_1.png';

  randomWord();
  guessedWord();
  updateError();
  newButtons();
}

document.getElementById('maxError').innerHTML = maxError;

randomWord();
newButtons();
guessedWord();
