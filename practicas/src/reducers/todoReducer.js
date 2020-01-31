const inicial = [{ id: '2', text: 'h', completed: false }];

const todoReducer = (state=inicial, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return [...state, {id:action.id, text:action.text, completed:false}]
        case 'TODO_REALIZAR':
            return state.map(item=>(item.id === action.id)?{...item, completed:!item.completed}:item)
        default:
            return state;
    }
}
/*
    yo al todo_add lo haría así:
    case 'TODO_ADD':
            let copy = Array.from(state);
            const nuevo = {
                id: action.id,
                text: action.text,
                completed: false
            };
            copy.push(nuevo);
            return copy;
*/


export default todoReducer;