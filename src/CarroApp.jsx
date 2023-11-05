import { ProductosView } from "./components/ProductosView";
import { CarroCompraView } from "./components/CarroCompraView";
import { useState } from "react";

export const CarroApp = () => {

    const [ productosCarro, setProductosCarro ] = useState([]);

    const handlerAddProductoCarro = (producto) => {
        
        let newProductosCarro = [];

        const hasProducto = productosCarro.find((p) => { return p.producto.id === producto.id });

        if (hasProducto) {

            newProductosCarro = productosCarro.map((p) => {
                if (p.producto.id === producto.id) {
                    p.cantidad = p.cantidad + 1;
                }
                return p;
            });

            setProductosCarro(newProductosCarro);

        } else {

            newProductosCarro = [
                ...productosCarro,
                {
                    producto: producto,
                    cantidad: 1
                }
            ];
        }

        setProductosCarro(newProductosCarro);
    }

    const handlerDeleteProductoCarro = (id) => {

        let newProductosCarro = productosCarro.filter((p) => {return p.producto.id !== id});

        setProductosCarro(newProductosCarro);
    }

    return (
        <>
            <div className="container">
                <h1>Carro</h1>

                <ProductosView handler={producto => handlerAddProductoCarro(producto)} />

                { productosCarro?.length <= 0 || (
                    <div className="my-4 w-50">
                        <CarroCompraView 
                            items={productosCarro} 
                            handler={id => handlerDeleteProductoCarro(id)}
                        />
                    </div>
                )}

            </div>
        </>
    );
}