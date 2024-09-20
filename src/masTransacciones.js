document.addEventListener("DOMContentLoaded", function () {
  const listado = document.getElementById("listadoMasTransacciones");

  const cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

  const cuentasAgrupadas = {};

  cuentas.forEach((cuenta) => {
    const key = `${cuenta.nombre}-${cuenta.billetera}`;

    if (cuentasAgrupadas[key]) {
      cuentasAgrupadas[key].transacciones += cuenta.transacciones;
    } else {
      cuentasAgrupadas[key] = {
        nombre: cuenta.nombre,
        billetera: cuenta.billetera,
        transacciones: cuenta.transacciones,
      };
    }
  });

  const cuentasUnicas = Object.values(cuentasAgrupadas);

  cuentasUnicas.sort((a, b) => b.transacciones - a.transacciones);

  cuentasUnicas.forEach((cuenta) => {
    const item = document.createElement("div");
    item.textContent = `${cuenta.nombre} - ${cuenta.billetera} - ${cuenta.transacciones} transacciones`;
    listado.appendChild(item);
  });
});
