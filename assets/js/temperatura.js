(function(exports){
  "use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas
function Temperatura(valor,tipo)
{
  Medida.call(this, valor, tipo);
  /* tipo es opcional. Debería admitir new Medida("45.2 F") */
}

Temperatura.prototype = new Medida();//heredamos

Temperatura.prototype.constructor = Temperatura;
exports.Temperatura=Temperatura;
})(this);
