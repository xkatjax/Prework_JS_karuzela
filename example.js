/* Zadanie - ZMIENNE 
let C = 2;
let M = 2;
let E = M * C * C;
console.log(E);
*/

/* Zadanie - OBIEKTY 
let car1 = {
    mark: "Fiat",
    model: "Punto",
    productionYear: 1999
};

let car2 = {
    mark: "BMW",
    model: "E90",
    productionYear: 2013
};

console.log(car1.mark + ' ' + car1.model + ' ' + car1.productionYear);
console.log(car2.mark + ' ' + car2.model + ' ' + car2.productionYear);
*/



/* Zadanie - FUNKCJE 
// Zadanie 1
let multiplicationByTwo = (number) =>
{
    console.log(number * 2);
}

multiplicationByTwo(4);

//Zadanie 2
let anyMultiplication = (number1, number2) =>
{
    console.log(number1 * number2);
}

anyMultiplication(5, 7);
anyMultiplication(2, 6);

//Zadanie 3
let exponentiation = (number) =>
{
    console.log(number * number);
}

exponentiation(2);
exponentiation(5);
exponentiation(11);
*/

/*
let isBiggerThen10 = (number) =>
{
    if(number > 10){
        console.log('Gryffindor!');
    }
    else{
        console.log('Slytherin :( ');
    }
    
};

isBiggerThen10(5);
*/

/*
let pi = 3.14;
let circleLength = (radius) =>
{
    console.log(radius * 2 * pi);
};

for (let i=1; i<=20; i++)
{
    circleLength(i);
}
*/

/*Zadanie - Operatory i funkcje warunkowe
let divide = (number1, number2) =>
{
    if (number2 === 0)
        console.log("Operacja niedozwolona")
    else
    console.log(number2 / number1);
};

divide(2, 6);
*/

//Zadanie - Pętla FOR
let nOddNumbers = (n) =>
{
    for (let i=1; i <= n; i++)
    {
        console.log(2*i-1);
    }
};

nOddNumbers(5);