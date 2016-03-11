"use strict"
function Farenheit(valor,tipo,nuevoTipo){

  Temperatura.call(this,valor,tipo,nuevoTipo);

}
Farenheit.prototype = new Temperatura();
Farenheit.prototype.constructor = Farenheit;

Farenheit.prototype.ConvertFarTo = function(){
  if(this.nuevoTipo == 'c'){
    return this.toCelsius() +" grados Celsius";
  }
  else if (this.nuevoTipo == 'k') {
    return this.toKelvin() +" grados Kelvin";
  }
};

Farenheit.prototype.toCelsius = function(){
  return ((this.value - 32)* 5/9);
};

Farenheit.prototype.toKelvin = function(){
  return (((this.value - 32)*5/9) + 273);
};
