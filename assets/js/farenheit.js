(function(exports){
"use strict"
function Farenheit(valor,tipo,nuevoTipo){

  Temperatura.call(this,valor,tipo,nuevoTipo);

}
Farenheit.prototype = new Temperatura();
Farenheit.prototype.constructor = Farenheit;

Medida.measures.f=Farenheit;

Farenheit.prototype.toCelsius = function(){
  return ((this.value - 32)* 5/9);
};

Farenheit.prototype.toKelvin = function(){
  return (((this.value - 32)*5/9) + 273);
};
exports.Farenheit=Farenheit;
})(this);
