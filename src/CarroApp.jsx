import { ProductosView } from "./components/ProductosView";

export const CarroApp = () => {

    return (
        <>
            <div className="container">
                <h1>Carro</h1>

                <ProductosView />

                <div className="my-4 w-50">
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
                            <tr>
                                <td>Producto 1</td>
                                <td>$5.000</td>
                                <td>2</td>
                                <td>$10.000</td>
                                <td><button className="btn btn-danger">Eliminar</button></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-start fw-bold">$10.000</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </>
    );
}