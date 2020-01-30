import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementar, decrementar, cambiarLog} from '../actions';

/**
 * @function C42
 * @returns un contador + un booleano (Login) +4 botones que modifican estados
 */
const C42 = () => {
    const contador = useSelector(state=>state.contador);
    const login = useSelector(state=>state.login);

    const dispatch = useDispatch();
    return(
    <div>
        <p>Contador: {contador}</p>
        {login && <p>Bienvenido</p>}

        <button onClick={()=>dispatch(incrementar())}>+</button>
        <button onClick={()=>dispatch(incrementar(5))}>+5</button>
        <button onClick={()=>dispatch(decrementar())}>-</button>
        <button onClick={()=>dispatch(cambiarLog())}>Login</button>
    </div>)
};

//34:12
export default C42;