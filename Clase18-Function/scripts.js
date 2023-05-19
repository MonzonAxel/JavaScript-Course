//Funcion Comun

 function saludar1(){
    console.log("Hola");
} 

saludar1()

//Funcion Flecha 

const saludar = ( ) => console.log("Hola");
saludar()

// Funcion flecha pasando parametro

const saludarUsuario = (user) => console.log(`Hola ${user}`);

saludarUsuario('Pepe')
saludarUsuario('Marta')

//Otro ejemplo pasando parametros


const suma = (num1, num2) => {
    if(num1 == 2){
        return num1+num2
    }
    console.log("Esto no se va a ejecutar si entra en el if");
    return num1
}

console.log(suma(2,7))


//Funcion a la cual le paso dos parametros y otra funcion. 

const operation = (numero1, numero2, op) => {
    return op(numero1, numero2)
}

// Le paso como argumento 1,3 y otra funcion

console.log(operation(1, 3, (a, b) => a + b))
console.log(operation(1, 3, (a, b) => a - b))
console.log(operation(1, 3, (a, b) => a * b))
console.log(operation(1, 3, (a, b) => a / b))

