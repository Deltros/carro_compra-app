import { useEffect, useState } from "react";
import { getProductos } from "../services/getProductos";
import { ProductoView } from "./ProductoView";
import PropTypes from 'prop-types';

export const ProductosView = ({ handler }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos( getProductos() );
    }, []);

    return (
        <>
            <div className="row">
                {productos.map(( { id, descripcion, nombre, precioUnitario } ) => 
                    <div className="col-3 my-2" key={id}>
                        <ProductoView
                            handler={handler}
                            id={id} 
                            nombre={nombre} 
                            descripcion={descripcion} 
                            precioUnitario={precioUnitario}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

ProductosView.propTypes = {
    handler: PropTypes.func
}