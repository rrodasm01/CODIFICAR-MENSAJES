document.addEventListener("DOMContentLoaded", function() {

  //DECLARAMOS LAS VARIABLES
  let textoIntroducido = prompt("INTODUZCA UN MENSAJE PARA CIFRAR");
  let textoNuevo = "";
  let resultado = document.getElementById("resultado");
  let imagen = document.getElementById("imagen");
  let imagenActual = 0;

  //DECLARAMOS LOS ARRAYS
  let imagenes = ["candadoCerrado.png", "candadoAbierto.png"];

  let arrayLetras = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let arrayNumeros = ["0","1","2","3","4","5","6","7","8","9"];

  //LLAMAMOS A LA FUNCIÓN
  compararLetras();

  //REALIZAMOS LA FUNCIÓN DONDE VAMOS A CODIFICAR EL MENSAJE
  function compararLetras(){

      textoIntroducido = textoIntroducido.toUpperCase();

      for (let i = 0; i <textoIntroducido.length; i++){

          let caracter = textoIntroducido[i];

          let indice;

          if (caracter === 'Z') {

              textoNuevo += 'A';

          } else if (caracter === '9') {

              textoNuevo += '0';

          } else if ((indice = arrayLetras.indexOf(caracter)) !== -1) {

              textoNuevo += arrayLetras[(indice + 1) % arrayLetras.length];

          } else if ((indice = arrayNumeros.indexOf(caracter)) !== -1) {

              textoNuevo += arrayNumeros[(indice + 1) % arrayNumeros.length];

          } else {

              textoNuevo += caracter;

          }//if

      }//for

      resultado.textContent = textoNuevo;

      document.getElementById("contenedor").appendChild(imagen);
  }

  //HACEMOS UNA FUNCIÓN PARA QUE CAMBIE LA IMAGEN AL HACER CLICK
  imagen.addEventListener("click", function() {

      imagenActual = (imagenActual + 1) % imagenes.length;
      imagen.src = imagenes[imagenActual];

  });
});