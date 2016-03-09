(function(exports) {
  "use strict";

  /********* Medida **************/
  function Medida(valor,tipo)
  {
    this.value = valor;
    this.type = tipo;
  }
  Medida.constructor = Medida;

  /******* Temperatura que hereda de Medida ***************/
  function Temperatura(valor,tipo)
  {
    Medida.call(this, valor, tipo);
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
  }
  Temperatura.prototype = new Medida();
  Temperatura.prototype.constructor = Temperatura;

  /******** Celsius  que hereda de Temperatura ***********/
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

  /********* Farenheit que hereda de Temperatura *********/
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

  /******* Kelvin que hereda de Temperatura ********/
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

  /******* Metros que hereda de Temperatura ********/
  function Metros(valor)
  {
    Temperatura.call(this,valor);

  }
  Metros.prototype = new Temperatura();
  Metros.prototype.constructor = Metros;
  Metros.prototype.toPulgadas = function()
  {
    return (this.value * 39.37);
  }

  /******** Pulgadas que hereda de Temperatura ********/
  function Pulgadas(valor)
  {
    Temperatura.call(this,valor);

  }
  Pulgadas.prototype = new Temperatura();
  Pulgadas.prototype.constructor = Pulgadas;
  Pulgadas.prototype.toMeters = function()
  {
    return (this.value * 0.0254);
  };
  //var regexpsimple= XRegExp('(?<expresion>  ([-+]?[0-9]+(?:\.[0-9]+)?(?:e[+-]?[0-9]+)?)[ ]*([cCfFkKMmPp])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin)|(e|etr|etro|etros))?) # expresion');


  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
  exports.Kelvin = Kelvin;
  exports.Metros = Metros;
  exports.Pulgadas = Pulgadas;

  exports.convertir = function(){

  var elemento  = document.getElementById('converted');

  //console.log("Valor antes del if: " +valor);

  var  regexp = XRegExp('(?<expresion>  ([-+]?[0-9]+(?:\.[0-9]+)?(?:e[+-]?[0-9]+)?)[ ]*([cCfFkKMmPp])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin)|(e|etr|etro|etros))?) # expresion \n\
                        (?<opcional> [ ]*([Tt][oO])?[ ]*)   #opcional \n\
                        (?<medida_destino>   [ ]*[CcFfKkPpMm])   #medida_destino ', 'x');
  var valor = XRegExp.exec(convert.value, regexp);


  if (valor) {
      var resultado;
      var numero = valor[2],
      tipo   = valor[3].toLowerCase(),
      nuevoTipo = valor.medida_destino.toLowerCase(),
      numero = parseFloat(numero);
      //console.log("Valor: " + numero + ", Tipo: " + tipo, "nuevoTipo: " +nuevoTipo);


      switch (tipo) {

        case 'c':
            var celsius = new Celsius(numero);
              if(nuevoTipo == 'f'){
                resultado=celsius.toFarenheit().toFixed(2) + " Farenheit";
              }
            else if(nuevoTipo == 'k'){

                resultado=celsius.toKelvin().toFixed(2) + " Kelvin";
              }
        break;

        case 'f':
            var farenheit = new Farenheit(numero);
              if(nuevoTipo == 'c'){

                 resultado=farenheit.toCelsius().toFixed(2) + " celsius";
              }
              else if(nuevoTipo == 'k'){

                resultado=farenheit.toKelvin().toFixed(2) + " kelvin";
              }
        break;

        case 'k':
            var kelvin = new Kelvin(numero);
              if(nuevoTipo == 'c'){

                resultado= kelvin.toCelsius().toFixed(2) + " celsius";
              }
              else if(nuevoTipo == 'f'){
                resultado=kelvin.toFarenheit().toFixed(2) + " farenheit";
              }
        break;

        case 'm':
              var metros = new Metros(numero);
                if(nuevoTipo == 'p'){
                  resultado= metros.toP().toFixed(2) + " pulgadas";
                }
        break;

        case 'p':
              var pulgadas = new Pulgadas(numero);
                if(nuevoTipo == 'm'){
                  resultado= pulgadas.toMeters().toFixed(2) + " metros";
                }
        break;

        default:
          //console.log ('Estamos en la parte default del metodo convertir');
          elemento.innerHTML = "ERROR!!! Intente escribir algo como: '3.2e-3 C to F' "
     }
     elemento.innerHTML= resultado;
     return false;
  }else
      //elemento.innerHTML = "";
      //converted.innerHTML = "ERROR!!! Intente escribir algo como: '3.2e-3 C to F' ";
      console.log("Estamos en el else exterior.");
  }

})(this);
