import React from 'react';
import { connect } from 'react-redux'
import {addTodo} from '../actions';


const AgregarItem = ({dispatch})=>{
    let input;

    return(
        <form onSubmit={(e)=>{e.preventDefault(); dispatch(addTodo(input.value))}}>
            <input ref={node=>input=node} type="text"/>
            <button type="submit">Agregar</button> 
        </form>
    )
}

export default connect()(AgregarItem)
/*
const C43Cont = connect (mapStateProps)(TodoList);
export default C43Cont;
*/