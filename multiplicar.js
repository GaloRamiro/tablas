function generarTablas() {
  let contenido = "";
  for (let i = 1; i <= 10; i++) {
    let resulado = 3 * i;
    contenido += `<div class="fila">3 x ${i} = ${resulado}</div>`;
  }
  let contenedor = document.getElementById("miTabla");
  contenedor.innerHTML = contenido;
}
