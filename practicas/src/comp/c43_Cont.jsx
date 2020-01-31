import TodoList from './c43_Lista.jsx';
import {connect} from 'react-redux';
import {realizar} from '../actions';

// Convertir de state a Props
const mapStateProps = state=>({
    todosElementos:state.todos
})

const mapDispatchToProps = dispatch =>({
    evtRealizar:id=>dispatch(realizar(id))
})


const C43Cont = connect (mapStateProps, mapDispatchToProps)(TodoList);

export default C43Cont;