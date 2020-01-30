import {combineReducers} from 'redux';
import contadorReducer from './contadorReducer';
import loginReducer from './loginReducer';

const rootReducers = combineReducers({
    contador: contadorReducer,
    login: loginReducer,
})

export default rootReducers;

