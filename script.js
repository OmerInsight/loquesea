// Ejemplo de mi primer codigo en Js 
function saludar(){
    alert("Hola clase que onda Somos lo Mas, C53")
}


// Ejemplo de mi segundo codigo en Js
// Declaracion de Variables
var nombre = "Juan"
var edad = 18

// Ejemplo de mi tercer codigo en JS mi Condicional
if(edad>=18){
    var mensaje = nombre + " es mayor de edad";
} else {
    var mensaje = nombre + " es menor de edad";
}

// Ejemplo de mi cuarto codigo en Js Creacion de P y contenido
// Creacion del elemento p' en html
var elemento = document.createElement("p");
elemento.textContent = mensaje;
document.body.appendChild(elemento)

