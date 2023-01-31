// import lo que estoy exportando from(desde) "ubicacion"
import validator from "./validator.js";

//Boton para validar número de la tarjeta
const Botonvalidar= document.getElementById("botonvalidar")
Botonvalidar.addEventListener("click",validate)

//función para validar campo
function validate() {
  const creditCardNumber = (document.getElementById("EntradadeNúmero").value); // almacena # tarjeta
  if (creditCardNumber === "") {
    alert("CAMPO VACIO!, Ingresa tu número de tarjeta."); // Mostrar mensaje de error por campo vacío
  } else {
    document.getElementById("EntradadeNúmero").value = validator.maskify(creditCardNumber);//Asigna el valor de la función maskify a entrada número

  } if (validator.isValid(creditCardNumber) && creditCardNumber.length > 0) { //&& operador binario con resultado de true si los dos valores son verdaderos 
    alert("Tarjeta Valida")
  }
  else {
    alert("Tarjeta Invalida")
  }
}
//console.log(validator)
