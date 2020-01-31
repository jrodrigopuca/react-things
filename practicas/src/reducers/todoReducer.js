const inicial=[{id:'2',text:'h',completed:false}];

const todoReducer = (state = inicial, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            const copy = Array.from(state);
            copy.push(action.payload.text);
            return copy;
        default: 
            return state;
    }
}

export default todoReducer; 