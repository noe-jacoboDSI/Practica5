  function main() {
      "use strict"
      var valor     = document.getElementById('convert').value,
          elemento  = document.getElementById('converted');
      elemento.innerHTML = Medida.convertir(valor);
    
      return false;
  }
