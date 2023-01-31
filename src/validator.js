// Dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos 
const validator =  { //objeto validator

  //Función para enmascarar los números de la tarjeta y dejar visibles los últimos 4
  maskify: function (creditCardNumber)  {
    let enmascarar = ""; //variable que guarda el número de la tarjeta con los #
    for (let i = 0; i < creditCardNumber.length; i++){ 
      if (i > creditCardNumber.length-5){
        enmascarar += creditCardNumber[i]; //agrega los números de la tarjeta de credito 
      } else {
        enmascarar += "#";//agrega el simbolo # para ocultar los números
      }
    }  
    return enmascarar;//retorna la variable enmascarar
  },

  //algoritmo de luhn
  isValid: function (creditCardNumber){

    //Define las variables 
    const arreglo=Array.from(creditCardNumber); // se asigna el valor de la tarjeta de credito ingresado a una variable de tipo array llamado arreglo 
    //console.log(arreglo)
    const invertir=arreglo.reverse(creditCardNumber); //invierte el orden del array
    //console.log(invertir)
    let añadirDigitos = 0;
    let Par = 0;
    let impar = 0;
    
    // Recorrido del array arreglo inversa 
    for (let i=0; i<invertir.length; i++){ 
      let posicionDeNúmeros = Number(invertir[i])
      //console.log(posicionDeNúmeros)
    
      //Duplicar los números que están en las posiciones pares
      if ((i+1) % 2 === 0) { 
        posicionDeNúmeros = Number(invertir[i]*2)
        //console.log(posicionDeNúmeros)

        //Sumar los dígitos de los números mayores o iguales a diez
        if (posicionDeNúmeros >= 10){
          añadirDigitos = posicionDeNúmeros - 9
          Par += añadirDigitos //suma de valores
          //console.log(añadirDigitos + " Estoy sumando los numeros de 2 digitos")

          //Números en posiciones impares
        } else {
          Par += posicionDeNúmeros

        }  
      } else { 
        posicionDeNúmeros = Number(arreglo[i])
        impar += posicionDeNúmeros
      }
    }

    //Variable con la suma de los números en posiciones pares e impares
    const Total = Par + impar
    //console.log(Total)

    //Si el total dividido entre diez tiene residuo 0, retorna true
    if (Total % 10 === 0) {
      return true
      
    } else { 
      return false 
    } 
  }
}
// solo se puede exportar una sola 
export default validator;
 
 