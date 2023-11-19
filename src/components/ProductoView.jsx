import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ProductoView = ({ handler, id, nombre, descripcion, precioUnitario }) => {

    const navigate = useNavigate();

    const onAddProducto = (producto) => {
        handler(producto);
        navigate('/carro')
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text text-end">${precioUnitario}</p>
                    <div className="d-grid gap-2">
                    <button className="btn btn-primary"
                        onClick={() => onAddProducto({ id, nombre, descripcion, precioUnitario })}>
                            Agregar al carro
                    </button>
                    </div>

                </div>
            </div>
        </>
    )
}

ProductoView.propTypes = {
    handler: PropTypes.func,
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precioUnitario: PropTypes.number.isRequired
}