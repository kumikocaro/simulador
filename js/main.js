document.addEventListener('DOMContentLoaded', function() {
    const paquetes = [
        { nombre: "Paquete A", precio: 1320 },
        { nombre: "Paquete B", precio: 2000 },
        { nombre: "Paquete C", precio: 2500 }
    ];

    llenarSelectPaquetes(paquetes);
    document.getElementById('calcular').addEventListener('click', calcularValorFinal);
});

function llenarSelectPaquetes(paquetes) {
    const selectPaquete = document.getElementById('paquete');
    paquetes.forEach(paquete => {
        const option = document.createElement('option');
        option.value = paquete.precio;
        option.textContent = `${paquete.nombre} - $${paquete.precio}`;
        selectPaquete.appendChild(option);
    });
}

function calcularValorFinal() {
    const valorPaquete = parseFloat(document.getElementById('paquete').value);
    const porcentajeImpuesto = parseFloat(document.getElementById('impuesto').value) || 0;
    const porcentajeDescuento = parseFloat(document.getElementById('descuento').value) || 0;

    if (isNaN(valorPaquete)) {
        alert('Por favor seleccione un paquete válido.');
        return;
    }

    const montoImpuesto = calcularMonto(valorPaquete, porcentajeImpuesto);
    const montoDescuento = calcularMonto(valorPaquete, porcentajeDescuento);
    const precioFinal = valorPaquete + montoImpuesto - montoDescuento;

    document.getElementById('precioFinal').textContent = precioFinal.toFixed(2);
}

function calcularMonto(base, porcentaje) {
    return base * (porcentaje / 100);
}

