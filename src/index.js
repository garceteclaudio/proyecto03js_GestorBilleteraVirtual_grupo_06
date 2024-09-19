document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-flexbox");
  const verListado = document.getElementById("verListado");

  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

  form.addEventListener("submit", (e) => {
    const nombre = document.getElementById("nombre").value;
    const billetera = document.getElementById("select").value;
    const transacciones = document.getElementById("transacciones").value;

    cuentas.push({ nombre, billetera, transacciones: parseInt(transacciones) });

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
  });

  verListado.addEventListener("click", function () {
    window.location.href = "verListado.html";
  });
});

function irAOtroHtml() {
  window.location.href = "masTransacciones.html";
}
