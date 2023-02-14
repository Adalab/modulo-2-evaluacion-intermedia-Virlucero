// defino funcion random
function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}

// obtengo numero random
const random= getRandomNumber(100)


// pinto mi numero en la consola
console.log("este es mi numero random " +random )

// busco el boton prueba 
const btnElement=document.querySelector(".js-btn")

// añado listener al boton prueba 
btnElement.addEventListener("click", (evt)=>{
    // evitar que se refresque la pagina 
    evt.preventDefault()

    // obtener valor del input

    // comparar el valor introcudo con el random
})
