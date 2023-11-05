import { productos } from "../data/productos";

export const getProductos = () => {
    return productos;
}

export const calcularTotal = (items) => {

    let total=0;

    items.forEach((p) => {
        total += p.producto.precioUnitario * p.cantidad;
    })

    return total;
}