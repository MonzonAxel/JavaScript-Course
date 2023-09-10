/* 
7 - Crea 3 arrays. El primero tendrá 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/

// Forma 1 

const array = [1,2,3,4,5]; //Recordar el array comienza de la posicion i=0
let pares = [];
let impares = [];

for(i=0; i<array.length; i++){
	let sum = array[i] * Math.round(Math.random()*(10)+1)
	if (sum%2 == 0){
		pares.push(sum);
	}else{
		impares.push(sum);
	}
}

console.log(pares)
console.log(impares)

//Forma mediante funciones 

// Función para generar un número aleatorio entre min (incluido) y max (excluido)
const generarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Función para multiplicar los números del primer array por números aleatorios y clasificarlos
const multiplicarYClasificarNumeros = (numeros) => {
    const pares = [];
    const impares = [];

    for (const numero of numeros) {
        const resultado = numero * generarNumeroAleatorio(1,11);

        if (resultado % 2 === 0) {
            pares.push(resultado);
        } else {
            impares.push(resultado);
        }
    }

    return {
        pares,
        impares
    };
}

// Función principal
const main = () => {
    const numeros = [3, 8, 12, 5, 20];
    const resultados = multiplicarYClasificarNumeros(numeros);

    console.log("Números Pares:", resultados.pares);
    console.log("Números Impares:", resultados.impares);
}

// Llama a la función principal para ejecutar el código
main();
