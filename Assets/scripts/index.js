// alert("hello");
let motSecret;

// let now = new Date(); //Date d'aujourd'hui
let tableMot = new Array(); //Table qui contient les lettres du mot à trouver
let mot = new Array(); //Table qui contient tout les mots possibles

let tailleMot; //Le nombre de lettres du mot à trouver
let coupsManques = 1; // Nombre d'erreur envoyées
let lettresTrouvees = 0; //Le nombre de lettre trouvées
let end = false; //true si le jeu est terminé

mot[0] = "DEVELOPPEUR";
mot[1] = "INTERNET";
mot[2] = "COMMUNAUTE";
mot[3] = "HELICOPTERE";
mot[4] = "VOITURES";
mot[5] = "CHAUSSURE";
mot[6] = "ACROBATE";
mot[7] = "ORDINATEUR";
mot[8] = "ABATTAGE";
mot[9] = "AEROPORT";
mot[10] = "TELEVISION";
mot[11] = "ALTITUDE";
mot[12] = "HORLOGES";
mot[13] = "LABRADOR";
mot[14] = "LOOPINGS";
mot[15] = "MAITRISE";
mot[16] = "MALADROIT";
mot[17] = "POLICIER";
mot[18] = "PORTABLE";
mot[19] = "MASSACRE";
mot[20] = "MONTAGNE";
// console.log(mot);
motSecret = mot[Math.floor(Math.random() * 21)];
const convertSecret =(motSecret)=>{
    let secret='';
    for (let i = 0; i<motSecret.length; i++){
        secret+='_';
    };
    return secret;
};
console.log(convertSecret.secret);
console.log(motSecret);
tailleMot = motSecret.length;
tableMot = motSecret.split("");
// Permet de changer la couleurs des touches du clavier
// function changeColor(element, color) {
//   element.backgroundColor = color;
// }
// Gère tous les traitements à faire lorsqu'on appuie sur une touche
function proposer(element) {
    // if (element.backgroundColor == "black" || end) return;
    let lettre = element.innerHTML;
    
    let trouve = false; //Variable trouve à false
    
    for (let i = 0; i < tailleMot; i++) {
        console.log(tableMot);
        if (tableMot[i].innerHTML == lettre) {
            tableMot[i].style.visibility = "visible"; //affichage de la lettre
            trouve = true;
            lettresTrouvees++;
        }
        console.log(trouve);
    }
  //Si la letre n'est pas présente, trouve vaut toujours false
    if (!trouve) {
        coupsManques++;
        document.images["pendu"].src =
        "./Assets/img/Pendu_" + coupsManques + ".jpg";
    }
    // Si on a raté 8fois
    if (coupsManques == 8) {
        // alert("nul");
        for (let i = 0; i < tailleMot; i++);
        // console.log(tableMot[i]);
        let tst = document.getElementById("tst");
        tst.innerHTML = motSecret;
        end = true;
        // On affiche le mot, on fini le jeu
    }
    // console.log(tailleMot);
    if (lettresTrouvees == tailleMot) {
        alert("fort");
        end = true;
    }
    if(trouve === lettre){
        trouve=true;
        lettresTrouvees++;
    };
}
let buttons = document.querySelectorAll(".button");
buttons.forEach((e) => {
  e.addEventListener("click", () => {
    proposer(e);
    // console.log(e.innerText);
  });
});