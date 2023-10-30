
export const ProductoView = ({ nombre,descripcion,precioUnitario }) => {
    return (
        <>
            <div className="col-3 my-2" >
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text">${precioUnitario}</p>
                        <button className="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </div>
        </>
    )
}