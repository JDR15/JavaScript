let valorg = 100000
let nombre = prompt("Ingrese su nombre")
let op = 1
let eleccion = 1


let lanzar = function() {
    let moneda = Math.floor(Math.random()*1+2)
}



function ganar(){

}

function perder(){

}

while(op == 1){

    
    let apost = parseInt(prompt("Ingrese el valor a apostar"))
    let elec = prompt("Elija 1.cara 2.sello")

    lanzar()
    
    if( elec == 1 && lanzar==1){
        alert("ganaste")
        
    }else if( elec ==2 && lanzar==2){
        alert("perdiste")
    }

 

    op = prompt("Deseas volver a digitar 1.Si 2.No")
}