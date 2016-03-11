(function(exports){


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

    if(tipo == 'c'){
      resultado = new Celsius(numero,valor,nuevoTipo);
      elemento.innerHTML=resultado;
      return false;
    }else{
        console.log("Estamos en el else de dentro ");
      elemento.innerHTML="ERROR!!! Intente escribir algo como: '3.2e-3 C to F' ";
 }else{
   console.log("Estamos en el else de fuera ");
 elemento.innerHTML="ERROR!!! Intente escribir algo como: '3.2e-3 C to F' ";
 }
}


exports.convertir=convertir;
})(this);
