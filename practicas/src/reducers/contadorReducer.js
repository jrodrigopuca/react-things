const contadorReducer = (state=0, action)=>{
    switch(action.type){
        case "INCREMENTAR": 
            return state+ action.payload;
        case "DECREMENTAR": 
            return state-1;
        default:
            return state;
    }
}

export default contadorReducer;