// Variables

var a; // Declarando
var b = 'b'; // Declaramos y asignamos
b = 'bb';  // Reasignando el valor que se tiene
var a = 'aa' // Redeclaración


// Global Scope
var fruit = 'Apple'; // Global
console.log(fruit)
function bestFruit() {
    console.log(fruit);
}

bestFruit();

 
function countries() {
    country = 'Mexico' // Global, podrá ser accedido fuera de la función. Si asignamos sin declarar
    console.log(country)
}

countries();
console.log(country)