import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { calcularTotal } from "../services/getProductos";

export const CarroCompraView = ({ handler, items }) => {

    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        setTotal( calcularTotal(items) );
    }, [items])

    const onDeleteProducto = (id) => {
        handler(id);
    }

    const parseDinero = (numero) => {
        return numero.toLocaleString().replace(/,/g, '.');
    }

    return (
        <>
            <h3>Carro de compra</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {items.map( item  => 
                        <tr key={item.producto.id}>
                            <td>{item.producto.nombre}</td>
                            <td>${parseDinero(item.producto.precioUnitario)}</td>
                            <td>{item.cantidad}</td>
                            <td>${parseDinero(item.cantidad * item.producto.precioUnitario)}</td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => onDeleteProducto(item.producto.id)}>
                                        Eliminar
                                </button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">${parseDinero(total)}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

CarroCompraView.propTypes = {
    items: PropTypes.array,
    handler: PropTypes.func,
    total: PropTypes.number,
}
