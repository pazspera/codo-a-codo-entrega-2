const d = document;
const $cantidad = d.getElementById("cantidad");
const $categoria = d.getElementById("categoria");
const $resultado = d.getElementById("resultado");
const $formulario = d.getElementById("formulario");

const calcularPrecio = (cantidad, categoria) => {
  let cantidadTotal = cantidad * 200;
  let precioFinal = 0;

  switch (categoria) {
    case "estudiante":
      precioFinal = (20 * cantidadTotal) / 100;
      return precioFinal;
      break;
    case "trainee":
      precioFinal = cantidadTotal / 2;
      return precioFinal;
      break;
    case "junior":
      precioFinal = (85 * cantidadTotal) / 100;
      return precioFinal;
      break;
  }
};

d.addEventListener("click", (e) => {
  // Botón resumen
  if (e.target.matches("#btn_resumen")) {
    // Recupera valores inputs
    let cantidad = Number($cantidad.value);
    let categoria = $categoria.value;
    let totalAPagar = 0;

    // Calcula precio si cantidad es superior a 0
    if (cantidad > 0) {
      totalAPagar = calcularPrecio(cantidad, categoria);

      // Borra contenido de resultado para que no se creen muchos alerts
      $resultado.innerHTML = "";

      // Crea alerta
      let $alert = d.createElement("div");
      $alert.id = "alert";
      $alert.classList.add("alert", "alert-primary");
      $alert.innerHTML = `Total a pagar: $${totalAPagar}`;
      $resultado.insertAdjacentElement("beforeend", $alert);
    } else {
      // Crea alerta avisando que no hay cantidad
      let $alert = d.createElement("div");
      $alert.id = "alert";
      $alert.classList.add("alert", "alert-danger");
      $alert.innerHTML = `Ingrese una cantidad y categoría para calcular el total`;
      $resultado.insertAdjacentElement("beforeend", $alert);
    }
  }

  if (e.target.matches("#btn_borrar")) {
    // Borra alert
    $resultado.removeChild($resultado.firstElementChild);
    // Reset formulario
    $formulario.reset();
  }
});
