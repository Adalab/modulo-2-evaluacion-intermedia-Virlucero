"use strict"

const random= getRandomNumber(100);
const pistaElement=document.querySelector (".js-pista");
const btnElement=document.querySelector(".js-btn");
const triesElement=document.querySelector(".js-tries");
const inputElement=document.querySelector(".js-value") 
let tries=0;

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}


// defino funcion check result
 function checkResult(evt){
    // evitar que se refresque la pagina 
    evt.preventDefault()
    tries++;
    triesElement.innerHTML= "Número de intentos es " + tries

    // muestro consola el valor del input
    const userNumber = parseInt(inputElement.value)
    if (userNumber<0 || userNumber> 100 || isNaN(userNumber)) {
         pistaElement.innerHTML= "Error: Tu número debe estar comprendido entre 0 y 100"
    } else if (random === userNumber){
      pistaElement.innerHTML =" Has ganado campeona"
    }
    else if ( random > userNumber) {
        pistaElement.innerHTML ="El numero es demasiado bajo"
    } 
    else if (random < userNumber) {
        pistaElement.innerHTML ="El numero es demasiado alto"
    }
}

// añado listener al boton prueba 
btnElement.addEventListener("click", checkResult)
inputElement.addEventListener("keyup", ()=> {
    if(inputElement.value.length > 0){
        btnElement.removeAttribute("disabled")
    } else {
        btnElement.disabled = true
    }
})

