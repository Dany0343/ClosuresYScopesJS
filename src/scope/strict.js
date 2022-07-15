'use strict';
//var pi; // undefined. Esto es lo que puede interpretar JS
pi = 3.1416;
console.log(pi);

// Aquí ya no se hace uso del hoisting con la elevación de las variables en tiempo de compilación.
// Se tiene que asignar y declarar al mismo tiempo o declarar y luego reasignar para poderla usar.

// Se puede usar en una función

function myFunction() {
    'use strict';
    return pi = 3.141516;
}

console.log(myFunction());