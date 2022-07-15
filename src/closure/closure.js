function greeting() {
    let userName = 'Oscar';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); // En este llamado se retorna la función, la definición que tiene 'displayUserName'
console.log(g()); // Nos entrega el valor en este caso 'Hello Oscar'


