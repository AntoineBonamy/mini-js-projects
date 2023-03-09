
const cpChoice = Math.floor(Math.random() * 100) + 1;
let cpItem;

function cpPlay (cpChoice) {
    if (cpChoice < 33)  {
        console.log("computer a choisi Pierre");
        return cpItem = "pierre";
    }
    else if (cpChoice < 67) {
        console.log("computer a choisi Feuille");
        return cpItem = "feuille";
    }
    else {
        console.log("computer a choisi Ciseaux");
        return cpItem = "ciseaux";
    } 
}

cpPlay(cpChoice);

function pierrePlayer() {
    if (cpItem === "ciseaux") {
        alert("Gagné !");
    }
    else if (cpItem === "feuille") {
        alert("Perdu !");
    }
    else if (cpItem === "pierre") {
        alert("Egalité");
    }
    location.reload();
}

function feuillePlayer() {
    if (cpItem === "pierre") {
        alert("Gagné !");
    }
    else if (cpItem === "ciseaux") {
        alert("Perdu !");
    }
    else if (cpItem === "feuille"){
        alert("Egalité");
    }
    location.reload();
}
function ciseauxPlayer() {
    if (cpItem === "feuille") {
        alert("Gagné !");
    }
    else if (cpItem === "pierre") {
        alert("Perdu !");
    }
    else if (cpItem === "ciseaux"){
        alert("Egalité");
    }
    location.reload();    
}