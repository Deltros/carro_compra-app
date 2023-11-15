import { AddProductoCarro, DeleteProductoCarro, UpdateCantidadProductoCarro } from "./productosActions";

export const productosReducer = (state = [], action) => {

    switch (action.type) {
        case AddProductoCarro:

            return [
                ...state,
                {
                    producto: action.payload,
                    cantidad: 1
                }
            ];

        case UpdateCantidadProductoCarro:

            return state.map((p) => 
                {
                    if (p.producto.id === action.payload.id) {
                        return {
                            ...p,
                            cantidad: p.cantidad + 1,
                        };
                    }

                    return p;
                }
            )
            
        case DeleteProductoCarro:

            return state.filter((p) => {return p.producto.id !== action.payload})

        default:
            return state;
    }
}