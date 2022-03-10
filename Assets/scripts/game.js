const word = "LOL";
const wordLetters = word.split("");
const emptyLetters = new Array (word.length)
console.log(emptyLetters);
let life = 10;
const lettreUtilisee=[];

function guestWordRender(emptyLetters){
    const display = [];
    for (let i=0; i < emptyLetters.lenght; i++){
        if (emptyLetters[i]){
            display.push(emptyLetters[i]);
        }else{
            display.push('_');
        }
    }
    document.getElementById('emptyLetters').innerHTML=display.join(' ');
}

function render(){
    document.getElementById('life').innerHTML = life;
    document.getElementById('lettersAlreadyUsed').innerHTML=lettreUtilisee.join(',');
    guestWordRender(emptyLetters);
    document.getElementById('selectedLetter').value= "";
}

function getAllIndex(myWord,mySelectedLetter){
    const indexes = [];
    for (let i = 0; i<myWord.lenght; i++){
        const element = myWord[i];
        if(element === mySelectedLetter){
            indexes.push(i);
        }
    }
    return indexes;
}

function selectedLetter()  {
    let letter = document.getElementById('selectedLetter').value;
    letter = letter.trim();
    const mySelectedLetter = letter[0].toUpperCase();
    lettreUtilisee.push(mySelectedLetter)
    const temp = getAllIndex(wordLetters, mySelectedLetter)
    if(temp.length === 0){
        life--
    }else{
        console.log(temp);
         for (let i = 0; i < temp.length; i++){
            emptyLetters[temp[i]] = wordLetters[temp[i]]
            wordLetters[temp.i] = "";
            console.log(wordLetters);
         }
    }
    // render();
    if (life === 0){
        alert("You lose");
    }
    if (wordLetters.every( (el) => el === "" )){
        alert("You win");
    }
};
onload = function(){
    render();
}