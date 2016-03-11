function Farenheit(valor)
{
  Temperatura.call(this,valor);

}
Farenheit.prototype = new Temperatura();
Farenheit.prototype.constructor = Farenheit;
Farenheit.prototype.toCelsius = function()
{
  return ((this.value - 32)* 5/9);
};
Farenheit.prototype.toKelvin = function()
{
  return (((this.value - 32)*5/9) + 273);
};
