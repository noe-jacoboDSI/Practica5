"use strict"

function Kelvin(valor,tipo,nuevoTipo){
  Temperatura.call(this,valor, tipo,nuevoTipo);

}
Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;

Kelvin.prototype.convertKelvTo = function(){
  if(this.nuevoTipo == 'c'){
      return this.toCelsius() + "grados Celsius";
  }
  else if (this.nuevoTipo == 'f') {
      return this.toFarenheit() + "grados Farenheit";
  }
};


Kelvin.prototype.toCelsius = function(){
  return (this.value - 273.15);
};

Kelvin.prototype.toFarenheit = function(){
  return (((this.value - 273)*9/5)+32);
};
