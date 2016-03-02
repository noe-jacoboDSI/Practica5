(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
    var value = valor;
    var type = tipo || "";
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
  }
  Medida.constructor = Medida;

  function Temperatura(valor,tipo)
  {
    Medida.call(this, valor, tipo);
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
  }
  Temperatura.prototype = new Medida();
  Temperatura.prototype.constructor = Medida;


  function Celsius(valor)
  {
    Temperatura.call(this,valor);


  }
  Celsius.prototype = new Temperatura;
  Celsius.prototype.constructor = Celsius;
  Celsius.prototype.toFarenheit = function()
  {
    console.log('Estamos en la funcion toFarenheit');
    return 100.11111;
  }


  function Farenheit(valor)
  {
    Temperatura.call(this,valor);

  }
  Farenheit.prototype = new Temperatura;
  Farenheit.prototype.constructor = Farenheit;
  Farenheit.prototype.toCelsius = function()
  {
    console.log('Estamos en la funcion toCelsius');
    return 200.222222;
  }

  function Kelvin(valor)
  {
    Temperatura.call(this,valor);

  }
  Kelvin.prototype = new Temperatura;
  Kelvin.prototype.constructor = Kelvin;
  // Obviamente no añadiremos toKelvin aqui
  // Solo quiero comprobar que estamos dentro
  Kelvin.prototype.toKelvin = function()
  {
    console.log('Estamos en la funcion toKelvin');
    return 300.333333;
  }


  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
  exports.Kelvin = Kelvin;

  exports.convertir = function() {
        var valor = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
        /* Extienda la RegeExp a la especificación. use una XRegExp */
        regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]+)\s*$/i,
        valor     = valor.match(regexp);

    if (valor) {
      var numero = valor[1],
          tipo   = valor[2].toLowerCase();

      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);

      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          elemento.innerHTML = celsius.toFarenheit().toFixed(2) + " Farenheit";
          break;
        case 'f':
          var farenheit = new Farenheit(numero);
          elemento.innerHTML = farenheit.toCelsius().toFixed(2) + " Celsius";
          break;
        case 'k':
          var kelvin = new Kelvin(numero);
          // Esto no tiene sentido, solamente es para comprobar
          // si la estructura del añadido kelvin esta OK
          elemento.innerHTML = kelvin.toKelvin().toFixed(2) + " Kelvin";
          break;

        default:
        console.log ('Estamos en la parte default del metodo convertir');
          /* rellene este código */
      }
    }
    else
      elemento.innerHTML = "";
  }

})(this);
