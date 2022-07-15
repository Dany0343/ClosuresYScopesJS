const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // Funcion interna. Ya tenemos un closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

// Una vez que definimos una función y dentro otra función, se tiene un closure.

myFunction();