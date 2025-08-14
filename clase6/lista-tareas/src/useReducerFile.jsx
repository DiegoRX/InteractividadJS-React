import { useReducer } from "react";

export const UseReducerComponent = () => {
    const initialState = { count: 0 }

    //El nombre de la función puede ser cualquier. El normbre reducer es por el patron de diseño.
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            case 'reset':
                return { count: 0 }
            default:
                throw new Error('Acción no soportada')
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1>Reducer</h1>
            <p>Contador reducer</p>
            <p>Cuenta: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Reducir</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Resetear</button>
            <button onClick={() => dispatch({ type: 'error' })}>Error</button>
        </>
    )
}