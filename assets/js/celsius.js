function Celsius(valor,tipo,nuevoTipo)
"use strict";

{
  Temperatura.call(this,valor,tipo,nuevoTipo);
}

Celsius.prototype = new Temperatura();//heredamos de temp
Celsius.prototype.constructor = Celsius;
Medida.measures.c = Celsius;

Celsius.prototype.toFarenheit = function(){
  return ((this.value * 9/5) + 32);
};

Celsius.prototype.toKelvin = function(){
  return (this.value + 273.15);
};
