document.addEventListener("DOMContentLoaded", function () {
  const listado = document.getElementById("listadoMasTransacciones");

  //Obtener las cuentas almacenadas en el localStorage
  const cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

  //Crear un objeto para almacenar la transacción más grande de cada billetera
  const transaccionesMaximas = {};

  //Buscar la transacción más grande en cada billetera
  cuentas.forEach((cuenta) => {
    const { billetera, transacciones, nombre } = cuenta;

    if (!transaccionesMaximas[billetera] || transacciones > transaccionesMaximas[billetera].transacciones) {
      transaccionesMaximas[billetera] = { nombre, billetera, transacciones };
    }
  });

  //Mostrar las transacciones más grandes por cada billetera
  if (Object.keys(transaccionesMaximas).length > 0) {
    Object.values(transaccionesMaximas).forEach((transaccion) => {
      const item = document.createElement("div");
      item.textContent = `${transaccion.nombre} - ${transaccion.billetera} - ${transaccion.transacciones} transacciones`;
      listado.appendChild(item);
    });
  } else {
    listado.textContent = "No hay transacciones registradas.";
  }
});
