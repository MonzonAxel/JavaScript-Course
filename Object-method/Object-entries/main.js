//Object entries 

const persona1 = {
    nombre:"Luis",
    apellido:"Gomez",
    edad:50
  }
  
  const keyValue = Object.entries(persona1)
  
  keyValue.forEach(par => {
    const clave = par[0]
    const valor = par[1]
    console.log(clave, )
    
    if ( typeof valor === "string") persona1[clave] = valor.toUpperCase()
  })
  
  console.log(persona1)