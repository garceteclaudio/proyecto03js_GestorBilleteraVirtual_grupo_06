document.addEventListener("DOMContentLoaded", function () {
  const listado = document.getElementById("listadoMasTransacciones");

  const cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

  cuentas.sort((a, b) => b.transacciones - a.transacciones);

  cuentas.forEach((cuenta) => {
    const item = document.createElement("div");
    item.textContent = `${cuenta.nombre} - ${cuenta.billetera} - ${cuenta.transacciones} transacciones`;
    listado.appendChild(item);
  });
});
