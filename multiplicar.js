function generarTablas() {
  let numero = document.getElementById("txtNumero");
  let valorNumero = numero.value;
  let enteroNumero = parseInt(valorNumero);
  let contenido = "";
  for (let i = 1; i <= 10; i++) {
    let resulado = enteroNumero * i;
    contenido += `<div class="fila">${enteroNumero} x ${i} = ${resulado}</div>`;
  }
  let contenedor = document.getElementById("miTabla");
  contenedor.innerHTML = contenido;
}
