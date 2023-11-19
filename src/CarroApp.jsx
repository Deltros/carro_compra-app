import { Navbar } from "./components/Navbar";
import { useProductosCarro } from "./hooks/useProductosCarro";
import { CarroRoutes } from "./routes/CarroRoutes";

export const CarroApp = () => {

    const { productosCarro, handlerAddProductoCarro, handlerDeleteProductoCarro } = useProductosCarro();

    
    return (
        <>
            <Navbar />
            <div className="container my-4">
                <h3>Carro</h3>
                <CarroRoutes 
                    productosCarro={productosCarro}
                    handlerAddProductoCarro={handlerAddProductoCarro}
                    handlerDeleteProductoCarro={handlerDeleteProductoCarro}
                />
            </div>
        </>
    );
}