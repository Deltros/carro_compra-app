import { useEffect, useReducer } from "react";
import { productosReducer } from "../reducer/productosReducer";
import { AddProductoCarro, DeleteProductoCarro, UpdateCantidadProductoCarro } from "../reducer/productosActions";

const productosCarroInicial = JSON.parse(sessionStorage.getItem('carro')) || [];

export const useProductosCarro = () => {

    const [productosCarro, dispatch] = useReducer(productosReducer, productosCarroInicial);

    useEffect(() => {
        sessionStorage.setItem( 'carro', JSON.stringify(productosCarro) );
    }, [productosCarro]);

    const handlerAddProductoCarro = (producto) => {

        const hasProducto = productosCarro.find((p) => { return p.producto.id === producto.id });

        if (hasProducto) {

            dispatch(
                {
                    type: UpdateCantidadProductoCarro,
                    payload: producto,
                }
            );

        } else {

            dispatch(
                {
                    type: AddProductoCarro,
                    payload: producto,
                }
            );
        }
    }

    const handlerDeleteProductoCarro = (id) => {
        dispatch({
            type: DeleteProductoCarro,
            payload: id,
        })
    }

    return {
        productosCarro,
        handlerAddProductoCarro,
        handlerDeleteProductoCarro,
    }
}