function Kelvin(valor)
{
  Temperatura.call(this,valor);

}
Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;
Kelvin.prototype.toCelsius = function()
{
  return (this.value - 273.15);
};
Kelvin.prototype.toFarenheit = function()
{
  return (((this.value - 273)*9/5)+32);
};
