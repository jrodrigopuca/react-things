import React from 'react';
import {createStore} from 'redux';

//Action (describe lo que quieres hacer)
const incrementar = () =>{
    return {type:'INCREMENTAR'}
}

const decrementar = () =>{
    return {type:'DECREMENTAR'}
}

//Reducer (describen como tus acciones cambia un estado al siguiente estado, revisa)
const contador =(state=0, action)=>{
    switch(action.type){
        case "INCREMENTAR": 
            return state+1;
        case "DECREMENTAR": 
            return state-1;
    }
}
//STORE (forma de globalizar estados)
let store = createStore (contador);

//Mostrar en consola los cambios
store.subscribe(()=>console.log(store.getState()));

//Dispatcher(ejecuta las acciones)
store.dispatch(incrementar()); //=>1
store.dispatch(decrementar()); //=>0



const C41 = ()=>(
    <button onClick={(e)=>store.dispatch(incrementar())}>sumar</button>)

export default C41;
