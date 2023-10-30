import { useEffect, useState } from "react";
import { getProductos } from "../services/getProductos";
import { ProductoView } from "./ProductoView";

export const ProductosView = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const data = getProductos();
        setProductos(data);
    }, []);

    return (
        <>
            <div className="row">
                {productos.map(( { id, descripcion, nombre, precioUnitario } ) => 
                    <ProductoView key={id} nombre={nombre} descripcion={descripcion} precioUnitario={precioUnitario}/>
                )}
            </div>
        </>
    )
}