"use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas

  var regexp1= '(?<numero> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?)';

  var regexp2 = XRegExp('^(\\s*)                                    \n' +
                '(?<numero> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?)\n' +
                '(\\s*)                                             \n' +
                '(?<tipo> [fck]) #tipo                           \n' +
                '(\\s*)                                             \n' +
                '(to)?                                              \n' +
                '(\\s*)                                             \n' +
                '(?<destino> [fck]) #destino                     \n' +
                '(\\s*)$','ix');


function Medida(valor,tipo){

this.value = valor;
this.type = tipo;
}


Medida.match= function(){

var valor = XRegExp.exec(convert.value, regexp2);
return valor;

}

Medida.measures={};

Medida.convertir = function(valor) {
  var measures = Medida.measures;

  var match = Medida.match(valor);
  if (match) {
    var numero = match.numero,
        tipo   = match.tipo,
        destino = match.destino;


    try {
      var source = new measures[tipo](numero);  // new Fahrenheit(32)
      var target = "to"+measures[destino].name; // "toCelsius"
      return source[target]().toFixed(2) + " "+target; // "0 Celsius"
    }
    catch(err) {
      return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};


/*(function(exports){
  "use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas
function Medida(valor,tipo){
  this.value = valor;
  this.type = tipo;
}


//Medida.constructor = Medida;
exports.Medida=Medida;
})(this);*/
