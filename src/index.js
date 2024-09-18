document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario-flexbox');
    const verListado = document.getElementById('verListado');
    
    let cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      //Obtener los valores del formulario
      const nombre = document.getElementById('nombre').value;
      const billetera = document.getElementById('select').value;
      const transacciones = document.getElementById('transacciones').value;
      
      //Almacenar los datos en el arreglo
      cuentas.push({ nombre, billetera, transacciones: parseInt(transacciones) });
      
      //Guardar los datos en localStorage
      localStorage.setItem('cuentas', JSON.stringify(cuentas));
    });
  
    verListado.addEventListener('click', function() {
      //Botón para ver el listado
      window.location.href = 'summary.html';
    });
  });
  