import { Navigate, Route, Routes } from "react-router-dom";
import { ProductosView } from "../components/ProductosView";
import { CarroCompraView } from "../components/CarroCompraView";
import PropTypes from 'prop-types';

export const CarroRoutes = ({ productosCarro, handlerAddProductoCarro, handlerDeleteProductoCarro }) => {

    return (
        <>
            <Routes>

                <Route 
                    path="productos" 
                    element={ <ProductosView handler={producto => handlerAddProductoCarro(producto)}/> }
                />
                <Route 
                    path="carro" 
                    element={(

                        productosCarro?.length <= 0 ? 
                        <div className="alert alert-warning">
                            No hay productos en el carro de compras!
                        </div> 
                        :
                        (
                            <div className="my-4 w-50">
                                <CarroCompraView 
                                    items={productosCarro} 
                                    handler={id => handlerDeleteProductoCarro(id)}
                                />
                            </div>
                        )

                    )}
                />

                <Route path="/" element={ <Navigate to={'/productos'}/> } />

            </Routes>
        </>
    );
}

CarroRoutes.propTypes = {
    productosCarro: PropTypes.array.isRequired,
    handlerAddProductoCarro: PropTypes.func.isRequired,
    handlerDeleteProductoCarro: PropTypes.func.isRequired
}