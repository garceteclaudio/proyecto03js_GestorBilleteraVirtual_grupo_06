document.addEventListener("DOMContentLoaded", function () {
  const listado = document.getElementById("listadoMasTransacciones");

  const cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

  let cuentaMaxTransaccion = null;

  //Buscar y guardar la transacción más grande
  cuentas.forEach((cuenta) => {
    if (!cuentaMaxTransaccion || cuenta.transacciones > cuentaMaxTransaccion.transacciones) {
      cuentaMaxTransaccion = cuenta;
    }
  });

  //Mostrar la transacción más grande en caso de existir
  if (cuentaMaxTransaccion) {
    const item = document.createElement("div");
    item.textContent = `${cuentaMaxTransaccion.nombre} - ${cuentaMaxTransaccion.billetera} - ${cuentaMaxTransaccion.transacciones} transacciones`;
    listado.appendChild(item);
  } else {
    listado.textContent = "No hay transacciones registradas.";
  }
});
