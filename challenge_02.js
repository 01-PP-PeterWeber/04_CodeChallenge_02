/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let name = prompt("Geben Sie Ihren Namen ein:");

let age = parseInt(prompt("Geben Sie Ihr Alter ein:"));

let drink

switch (true) {
    case (age > 0 && age < 6):
        drink = "Milch";
        break;
    case (age >= 6 && age <= 12):
            drink = "Saft";
        break;
    case (age >= 13 && age <= 17):
        drink = "Cola";
        break;
    case (age >= 18):
        drink = "Wein";
        break;
    default: 
        drink = "gar nichts!"
        break;
}

console.log(name + ", Sie sollten " + drink + " trinken!");