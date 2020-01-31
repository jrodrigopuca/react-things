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
    payload: text,
})