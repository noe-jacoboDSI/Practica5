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
/********************/
Celsius.prototype = new Temperatura();//heredamos de temp
Celsius.prototype.constructor = Celsius;
Medida.measures.c = Celsius;

function Celsius(valor,tipo,nuevoTipo)
{
  Temperatura.call(this,valor,tipo,nuevoTipo);
}

Celsius.prototype.toFarenheit = function(){
  return ((this.value * 9/5) + 32);
};

Celsius.prototype.toKelvin = function(){
  return (this.value + 273.15);
};

/*************************/




//Temperatura.prototype.constructor = Temperatura;
exports.Temperatura=Temperatura;
})(this);
