const loginReducer = (state = false, action)=>{
    switch(action.type){
        case 'CAMBIARLOG':
            return !state;
        default:
            return state;
    }
}

export default loginReducer