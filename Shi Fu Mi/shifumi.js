
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

/*function Shifumi() {
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
    let playerChoice = prompt("pierre, feuille, ciseaux ?");
    cpPlay(cpChoice);
    if (playerChoice === "pierre") {
        if (cpItem === "ciseaux") {
            console.log("Gagné !");
        }
        else if (cpItem === "feuille") {
            console.log("Perdu !");
        }
        else if (cpItem === "pierre") {
            console.log("Egalité");
        }
    }
    else if (playerChoice === "feuille") {
        if (cpItem === "pierre") {
            console.log("Gagné !");
        }
        else if (cpItem === "ciseaux") {
            console.log("Perdu !");
        }
        else if (cpItem === "feuille"){
            console.log("Egalité");
        }
    }
    else if (playerChoice === "ciseaux") {
        if (cpItem === "feuille") {
            console.log("Gagné !");
        }
        else if (cpItem === "pierre") {
            console.log("Perdu !");
        }
        else if (cpItem === "ciseaux"){
            console.log("Egalité");
        }
    }
    else {
        console.log("Réponse invalide");
    }
}
*/

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