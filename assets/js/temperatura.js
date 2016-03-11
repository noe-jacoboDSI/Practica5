//(function(exports){
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
Temperatura.prototype.constructor = Temperatura;
//exports.Temperatura=Temperatura;
//})(this);
