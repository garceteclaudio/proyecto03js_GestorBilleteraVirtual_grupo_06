document.addEventListener('DOMContentLoaded', function() {
    const listado = document.getElementById('listado');
    
    const cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
  
    //Mostrar el listado de cuentas
    cuentas.forEach(cuenta => {
      const item = document.createElement('div');
      item.textContent = `${cuenta.nombre} - ${cuenta.billetera} - ${cuenta.transacciones} transacciones`;
      listado.appendChild(item);
    });
  });
  