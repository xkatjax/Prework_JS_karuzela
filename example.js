let myFirstFunction = (name, greeting) =>
{
    console.log( greeting + "! Mam na imię " + name + "!");
};

myFirstFunction('Kasia', "Hejka");
myFirstFunction('Olga', "Witam");

/* Zadanie - FUNKCJE */
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