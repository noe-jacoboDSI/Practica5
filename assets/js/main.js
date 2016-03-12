(function(exports){
"use strict";//utiliza el modo estricto donde no se puede utilizar variables no declaradas

function convertir(){

//  var expresion_reducida = XRegExp('(?<expresion> ([-+]?[0-9]+(?:\.[0-9]+)?(?:e[+-]?[0-9]+)?)[ ]*([cCfFkKMmPp])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin)|(e|etr|etro|etros))?) # expresion ');
  var  regexp = XRegExp('(?<expresion>  ([-+]?[0-9]+(?:\.[0-9]+)?(?:e[+-]?[0-9]+)?)[ ]*([cCfFkKMmPp])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin)|(e|etr|etro|etros))?) # expresion \n\
                        (?<opcional> [ ]*([Tt][oO])?[ ]*)   #opcional \n\
                        (?<medida_destino>   [ ]*[CcFfKkPpMm])   #medida_destino ', 'x');


var elemento  = document.getElementById('converted');

//var val = XRegExp.exec(convert.value, expresion_reducida);
//var valor = XRegExp.exec(convert.value, regexp, expresion_reducida);
var valor = XRegExp.exec(convert.value, regexp);


//alert("VAL: " + val + "   VALOR: " + valor);
if (valor) {
    var resultado;
    var numero = valor[2],
      tipo   = valor[3].toLowerCase(),
      nuevoTipo = valor.medida_destino.toLowerCase(),
      numero = parseFloat(numero);
    console.log("Valor: " + numero + ", Tipo: " + tipo, "nuevoTipo: " +nuevoTipo);
    if(tipo == 'c'){
      console.log("Entre en celsius" +numero + nuevoTipo);
      resultado = new Celsius(numero,tipo,nuevoTipo);
      elemento.innerHTML = resultado.convertCelsTo();
      return false;
    }
    else if (tipo == 'f') {
      resultado = new Farenheit(numero,tipo,nuevoTipo);
      elemento.innerHTML = resultado.ConvertFarTo();
      return false;
    }
    else if (tipo == 'k') {
      resultado=new Kelvin(numero,tipo,nuevoTipo);
      elemento.innerHTML = resultado.convertKelvTo();
      return false;
    }
    else{
        console.log("Estamos en el else de dentro ");
      elemento.innerHTML="ERROR!!! Intente escribir algo como: '3.2e-3 C to F' ";
    }
 }else{
   console.log("Estamos en el else de fuera ");
 elemento.innerHTML="ERROR!!! Intente escribir algo como: '3.2e-3 C to F' ";
 }

}


exports.convertir=convertir;
})(this);
