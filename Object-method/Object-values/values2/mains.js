const products = {

    pantalon:1530,
    remera:2000,
    medias:700,
    sombrero:350,
    zapatillas:4500,
    boxer:300,
    maquina:"Pedrito"
}

const total = Object.values(products)
total.filter(element => typeof element === "number").reduce((acc,valorActual)=>{
  if (typeof valorActual === "number") return acc + valorActual
})