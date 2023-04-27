//Crear array

let onces=["empanada","tamal"]

//imprimir array
console.log[onces]

//Acceder a un elemento del array 
elemento1=onces[1]
console.log (onces[1])
console.log(elemento1)
//Ultima posicion 
console.log(onces[onces.length-1])

//Rcorrer un array
onces.forEach(function(valor,posicion,array){
    console.log(`en la posicion ${posicion} hay ${valor}`)
})

//Añadir elementos al final del array 
onces.push("Jugo")
onces.push("huevo")
onces.push("chocorramo")
console.log(onces)

//elimiar el ultimo elemento del array 
onces.pop()
console.log(onces)

//Añadir elemento al inicio del array
onces.unshift("Chocorramo")
console.log(onces)

//Eliminar primer elemento 
onces.shift()
console.log(onces)

//Eliminar desde una posicion
onces.splice(1,1)
console.log(onces)

//Metodo busqueda filter
let busqueda1=onces.filter(onces=>onces=="tamal")
console.log(busqueda1)

//Metodo busqueda find
let busqueda2=onces.find(onces=>onces=="jugo")
console.log