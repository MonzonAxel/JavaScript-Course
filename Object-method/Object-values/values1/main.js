const products = {

    pantalon:1530,
    remera:2000,
    medias:700,
    sombrero:350,
    zapatillas:4500,
    boxer:300
}

// .value devuelve un array con los valores
const values = Object.values(products)
const total = values.reduce((acc,valorActual)=> acc + valorActual)
console.log(total)


