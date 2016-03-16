(function(exports){
"use strict"

function Kelvin(valor,tipo,nuevoTipo){
  Temperatura.call(this,valor, tipo,nuevoTipo);

}
Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;

Medida.measures.k=Kelvin;

Kelvin.prototype.toCelsius = function(){
  return (this.value - 273.15);
};

Kelvin.prototype.toFarenheit = function(){
  return (((this.value - 273)*9/5)+32);
};
exports.Kelvin=Kelvin;
})(this);
