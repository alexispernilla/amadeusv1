
function enviarPedido() {
  const nombre = document.getElementById('nombre').value;
  const cedula = document.getElementById('cedula').value;
  const direccion = document.getElementById('direccion').value;
  const mensaje = document.getElementById('mensaje').value;

  const texto = `Nuevo pedido a domicilio:%0A👤 Nombre: ${nombre}%0A🪪 Cédula: ${cedula}%0A📍 Dirección: ${direccion}%0A📝 Mensaje: ${mensaje}`;
  window.open(`https://wa.me/573205740914?text=${texto}`, '_blank');
}
