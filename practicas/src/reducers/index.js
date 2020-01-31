import {combineReducers} from 'redux';
import contadorReducer from './contadorReducer';
import loginReducer from './loginReducer';
import todoReducer from './todoReducer'

const rootReducers = combineReducers({
    contador: contadorReducer,
    login: loginReducer,
    todos: todoReducer,
})

export default rootReducers;

