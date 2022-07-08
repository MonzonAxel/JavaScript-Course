/*
Ordena 3 números de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 = 6
abc - 321
acb - 312
bac - 231
bca - 132
cab - 213
cba - 123
*/

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a=prompt("Ingrese el primer numero");
let b=prompt("Ingrese el segundo numero");
let c=prompt("Ingrese el tercer numero");

numbers.textContent = (`Los numeros ingresados son ${a}, ${b},${c}`);

if(a>=b && a>=c){
    if(b>c){
        result.textContent=(`El orden es ${a},${b},${c}`);
    }else{
        result.textContent=(`El orden es ${a},c ${c},b ${b}`);
    }50
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent=(`El orden es ${b},${a},${c}`);
    }else{
        result.textContent=(`El orden es ${b},${c},${a}`);
    }
}else if (c>=a && c>=b){
    if(a>b){
        result.textContent=(`El orden es ${c},${a},${b}`)
    }else {
        result.textContent=(`El orden es ${c},${b},${a}`)
    }
}




// Mi resolucion 
// if(a>=b && a>=c){
//     if(b>c){
//         result.textContent=(`El orden es ${a},${b},${c}`);
//     }else if(b<c){
//         result.textContent=(`El orden es ${a},${c},${b}`);
//     }else{
//         result.textContent (`El orden es ${a},${b},${c}` ); 
//     }  
// }else if(b>=a && b>=c){
//     if(a>c){
//         result.textContent=(`El orden es ${b},${a},${c}`);
//     }else if(a<c){
//         result.textContent=(`El orden es ${b},${c},${a}`);
//     }else{
//         result.textContent=(`El orden es ${b},${a},${c}`);
//     }
// }else if (c>=a && c>=b){
//     if(a>b){
//         result.textContent=(`El orden es ${c},${a},${b}`)
//     }else if (a<b){
//         result.textContent=(`El orden es ${c},${b},${a}`)
//     }else{
//         result.textContent=(`El orden es ${c},${a},${c}`)
//     }
// }
