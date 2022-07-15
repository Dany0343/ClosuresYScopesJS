// var nameOfDog; // undefined, esto sucede en la elevación. 

// console.log(nameOfDog); // Agarra el valor y lo eleva
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);


var elmo; // undefined, se elevó
// function nameOfDog(){ // Se eleva en tiempo de la asignación y compilación, no en nuestro codigo.
//     console.log(`El mejor perrito es ${elmo}`);
// }


nameOfDog();

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}

// var elmo = 'Elmito'; // Aquí ayuda el hoisting para asignar undefined, debido a que se eleva pero no tiene acceso a la variable por haberse declarado despues

x = 1;

console.log('x = ' + x);
var x;