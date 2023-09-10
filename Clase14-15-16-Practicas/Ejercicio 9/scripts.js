/* 
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

const incluyePalabra = (palabra) => {

    let consonantes=0
    let vocales = 0

    for(const letra of palabra.toLowerCase()){
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') vocales++ // || Operador OR.
        else consonantes++
    }
    
    return(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length} letras.`);
}

const main = () => {
    
    const PalabraUser = prompt('Introduce una palabra')
    const resultado = incluyePalabra(PalabraUser)
    console.log(resultado)
}

main ()

