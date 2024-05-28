document.getElementById('calcular').addEventListener('click', function() {
    const valorProducto = parseFloat(document.getElementById('producto').value);
    const porcentajeImpuesto = parseFloat(document.getElementById('impuesto').value) || 0;
    const porcentajeDescuento = parseFloat(document.getElementById('descuento').value) || 0;

    if (isNaN(valorProducto)) {
        alert('Por favor seleccione un producto válido.');
        return;
    }

    const montoImpuesto = valorProducto * (porcentajeImpuesto / 100);
    const montoDescuento = valorProducto * (porcentajeDescuento / 100);
    const precioFinal = valorProducto + montoImpuesto - montoDescuento;

    document.getElementById('precioFinal').textContent = precioFinal.toFixed(2);
});

