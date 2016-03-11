(function(exports){
"use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas

function Celsius(valor)
{
  Temperatura.call(this,valor);
}
Celsius.prototype = new Temperatura();
Celsius.prototype.constructor = Celsius;


Celsius.prototype.toFarenheit = function()
{
  return ((this.value * 9/5) + 32);
};

Celsius.prototype.toKelvin = function()
{
  return (this.value + 273.15);
};

exports.Celsius=Celsius;
})(this);
