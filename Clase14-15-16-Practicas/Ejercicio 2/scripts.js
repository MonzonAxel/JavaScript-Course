/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

let request =prompt("¿Que figura desea calcular?");
let requestm = request.toLowerCase();

console.log(requestm);

switch(requestm){
    case "triangulo":
        let b= prompt("Ingresar la base del triangulo");
        let h= prompt("Ingresar la altura del triangulo");
        alert (`El area del triangulo es ${b*h/2}`);
        break
    case "rectangulo":
        let br= prompt("Ingresar la base del rectangulo");
        let hr= prompt("Ingresar la altura del rectangulo");
        alert (`El area del rectangulo es ${br*hr}`);
        break
    case "circulo":
        let radio= prompt("Ingresar el radio del circulo");
        answer= Math.PI * Math.pow(radio,2);
        alert(`El area del circulo es ${answer}`);
        break
    default:
        alert("Error al ingresar los parametros");
}