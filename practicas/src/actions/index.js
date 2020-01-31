import cuid from 'cuid';
export const incrementar = (num=1) =>{
    return {type:'INCREMENTAR', payload: num}
}

export const decrementar = () =>{
    return {type:'DECREMENTAR'}
}

export const cambiarLog = ()=>{
    return {type:'CAMBIARLOG'}
}

//===== Para To-Do List (Comp c43)
export const addTodo = (text) =>({
    type: 'TODO_ADD', 
    id: cuid(),
    text,
});

export const realizar = (id)=>({
    type: 'TODO_REALIZAR',
    id
})

