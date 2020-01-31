import TodoList from './c43_Lista.jsx';
import {addTodo} from '../actions';
import {connect} from 'react-redux';

// Convertir de state a Props
const mapStateProps = state=>({
    todosElementos:state.todos
})

const C43_Cont = connect (mapStateProps)(TodoList);

export default C43_Cont;