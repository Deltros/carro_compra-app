import { ProductosView } from "./components/ProductosView";
import { CarroCompraView } from "./components/CarroCompraView";
import { useProductosCarro } from "./hooks/useProductosCarro";

export const CarroApp = () => {

    const { productosCarro, handlerAddProductoCarro, handlerDeleteProductoCarro } = useProductosCarro();
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