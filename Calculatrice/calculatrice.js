let firstValue;
let secondValue;

function operation(firstValue, secondValue) {
    firstValue = parseInt(prompt("Tapez un chiffre"));
    let operator = prompt("Quelle opération ?");
    secondValue = parseInt(prompt("Tapez un chiffre"));
    switch (operator) {
        case "+" :
        console.log(firstValue + secondValue);
        break;
        case "-" :
        console.log(firstValue - secondValue);
        break;
        case "*" :
        console.log(firstValue * secondValue);
        break;
        case "/" :
        console.log(firstValue / secondValue);
        break;
        default :
        console.log("Opérateur non valide");
        break;
    }
}