export const incrementar = (num=1) =>{
    return {type:'INCREMENTAR', payload: num}
}

export const decrementar = () =>{
    return {type:'DECREMENTAR'}
}

export const cambiarLog = ()=>{
    return {type:'CAMBIARLOG'}
}