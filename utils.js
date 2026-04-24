function recuperaTexto(idCompontente){
     let componente = document.getElementById(idCompontente);
     let valor = componente.value;
     return valor;
}

function recuperarEntero(idcomponten){
     let valorTexto =  recuperaTexto(idcomponten);
     let valorInt = parseInt(valorTexto);
     return valorInt ;
}