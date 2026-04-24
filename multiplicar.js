function generarTablas() {
  let numero = recuperaTexto("txtNumero");

  let enteroNumero = recuperarEntero("txtNumero");

  if (isNaN(enteroNumero)) {
    document.getElementById("miTabla").innerHTML =
      `<div class="fila"> Ingresa un número</div>`;
    return;
  }
  let contenido = "";
  for (let i = 1; i <= 10; i++) {
    let resultado = enteroNumero * i;
    contenido += `<div class="fila">${enteroNumero} x ${i} = ${resultado}</div>`;
  }
  let contenedor = document.getElementById("miTabla");
  contenedor.innerHTML = contenido;
}
