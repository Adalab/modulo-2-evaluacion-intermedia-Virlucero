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
    const inputElement=document.querySelector(".js-value")

    // obtener el elemento pista
    const pistaElement=document.querySelector (".js-pista")

    // muestro consola el valor del input
    console.log('el valor introducido ' + inputElement.value)

    // comparar el valor introducido con el random
    if (random === parseInt(inputElement.value)){
        console.log ("Has ganado campeona")
    }
    else if ( random > inputElement.value) {
        console.log("el numero es demasiado bajo")
        pistaElement.innerHTML ="el numero es demasiado bajo"
    } 
    else if (random < inputElement.value) {
        console.log ("demasiado alto")
    
    }

})
