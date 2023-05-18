const person = {
   name: 'Juan',
   age: 26,
   sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomás']
}

// console.log(person.name);
// console.log(person.sons[2]); 

// for(i=0; i<person.sons.length; i++){
//     console.log(" Recorridos "+ person.sons[i])
// }

//Me muestra las propiedades name age y sons , NO SUS VALORES.

// for(const key in person){
//     console.log(key);
//  }

 // Me muestra el contenido de las propiedades de mi objeto name age y sons

//  for(const key in person){
//     console.log(person[key]);
   

// } 

//  for(const son of person.sons){
//     console.log(son);
// } 

//console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(', ')}`);