//(function(exports){
"use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas

function Celsius(valor,tipo,nuevoTipo)
{
  Temperatura.call(this,valor,tipo,nuevoTipo);
}

Celsius.prototype = new Temperatura();//heredamos de temp
Celsius.prototype.constructor = Celsius;


Celsius.prototype.convertCelsTo = function() {
  if(this.nuevoTipo=='f'){
    return this.toFarenheit() + " grados Farenheit";
  }
};

Celsius.prototype.toFarenheit = function(){
  return ((this.value * 9/5) + 32);
};

//Celsius.prototype.toKelvin = function(){
//  return (this.value + 273.15);
//};

//exports.Celsius=Celsius;
//})(this);
