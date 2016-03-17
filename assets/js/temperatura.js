(function(exports){
  "use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas
function Temperatura(valor,tipo,nuevoTipo){
  this.nuevoTipo = nuevoTipo;//varaible propia que va a tener temperatura para saber a que convertir
  Medida.call(this, valor, tipo);
  /* tipo es opcional. Debería admitir new Medida("45.2 F") */
}

Temperatura.prototype = new Medida();//heredamos

Temperatura.prototype.get_nuevotipo=function(){//get para trabajar con nuestro nuevo tipo en las clases que heredan
  return this.nuevoTipo;
}
/********** CELSIUS **********/
Celsius.prototype = new Temperatura();//heredamos de temp
Celsius.prototype.constructor = Celsius;
Medida.measures.c = Celsius;
Medida.measures.C = Celsius;

function Celsius(valor,tipo,nuevoTipo)
{
  Temperatura.call(this,valor,tipo,nuevoTipo);
}

Celsius.prototype.toFarenheit = function(){
  return ((this.value * 9/5) + 32);
};

Celsius.prototype.toKelvin = function(){
  //return (this.value + 273.15);
  return (parseFloat(this.value)+273.15);
};

/*************************/

/*********** Farenheit *********/

function Farenheit(valor,tipo,nuevoTipo){

  Temperatura.call(this,valor,tipo,nuevoTipo);

}
Farenheit.prototype = new Temperatura();
Farenheit.prototype.constructor = Farenheit;
Medida.measures.f=Farenheit;
Medida.measures.F = Farenheit;

Farenheit.prototype.toCelsius = function(){
  return ((this.value - 32)* 5/9);
};

Farenheit.prototype.toKelvin = function(){
  return (((this.value - 32)*5/9) + 273);
};

/**********************************/

/************* Kelvin ***************/

function Kelvin(valor,tipo,nuevoTipo){
  Temperatura.call(this,valor, tipo,nuevoTipo);

}
Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;

Medida.measures.k=Kelvin;
Medida.measures.K = Kelvin;

Kelvin.prototype.toCelsius = function(){
  return (this.value - 273.15);
};

Kelvin.prototype.toFarenheit = function(){
  return (((this.value - 273)*9/5)+32);
};

/*************************************/



//Temperatura.prototype.constructor = Temperatura;
exports.Temperatura=Temperatura;
})(this);
