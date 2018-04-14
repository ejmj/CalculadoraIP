// Get the input field
var input = document.getElementById("entradaip");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("ejecuta").click();
  }
});
//FUNCION PARRA AÑADIR 0 A LA IZQUIERDA
function zfill(number, width) {
var numberOutput = Math.abs(number); /* Valor absoluto del número */
var length = number.toString().length; /* Largo del número */
var zero = "0"; /* String de cero */

if (width <= length) {
    if (number < 0) {
         return ("-" + numberOutput.toString());
    } else {
         return numberOutput.toString();
    }
} else {
    if (number < 0) {
        return ("-" + (zero.repeat(width - length)) + numberOutput.toString());
    } else {
        return ((zero.repeat(width - length)) + numberOutput.toString());
    }
}
}
//FUNCION IP DECIMAL - IP BINARIO
function ipBinario(){
var ip = document.getElementById("ip").value;
//separamos la ip por partes
var Priparte = ip.split(".") [0];
var Segparte = ip.split(".") [1];
var Terparte = ip.split(".") [2];
var Cuaparte = ip.split(".") [3];
//Pasamos de string a valor
var priNum = parseInt(Priparte);
var segNum = parseInt(Segparte);
var terNum = parseInt(Terparte);
var cuaNum = parseInt(Cuaparte);
console.log(priNum);
console.log(segNum);
console.log(terNum);
console.log(cuaNum);
//pasamos a binario y rellanamos hasta 8 zeros
var priBin = zfill(priNum.toString(2),8)
var segBin = zfill(segNum.toString(2),8)
var terBin = zfill(terNum.toString(2),8)
var cuaBin = zfill(cuaNum.toString(2),8)
console.log(priBin)
console.log(segBin)
console.log(terBin)
console.log(cuaBin)
document.getElementById('rIpBin').innerHTML = String(priBin) + "." + String(segBin) + "." + String(terBin) + "." + String(cuaBin)

}

function maskBinario(){
var maskNum = 16;
var maskBinUnido = repeat(1,maskNum)
  console.log(maskBinUnido)
}
