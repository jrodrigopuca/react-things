import React, {Component} from 'react';
import {fromJS} from 'immutable';
import PropTypes from 'prop-types';


/**
 * Continuación del C23, usando dos componentes que comparten estados.
 */
let componentes = fromJS([]);
let store = fromJS({});

/** 
 * @function setState: asigna estado a la tienda y lo comparte a c/u de los componentes
 * @function getState: devuelve lo almacenado en store
*/
function setState(state){
    store = state;

    for (const componente of componentes){
        componente.setState({data:store})
    }
}

function getState(){
    return store;
}


/**
 * @function Wrapper: devuelve el mismo componente agregandole props
 * @param {<Componente/>} Compuesto
 * @returns <Componente> 
 */
function Wrapper(Compuesto){
    return class Componente extends Component{
        state= {data: store}

        componentDidMount(){
            componentes=componentes.push(this);
        }

        componentWillUnmount(){
            const i = componentes.findIndex(this);
            componentes=componentes.delete(i);
        }

        render(){
            const props = this.state.data.toJS();
            return (<Compuesto {...props}/>)
        }
    }
}


/**
 * @function Lista
 * @param {array} items
 * @param {string} filtro 
 * @return lista filtrada
 */

const Lista = ({filtro, items})=>{
    const filter = new RegExp(filtro, 'i');
    return(
        <ul>
            {items.filter(item => filter.test(item))
                .map(item=>(<li key={item}>{item}</li>))
            }
        </ul>
    )
}

Lista.propTypes ={
    items: PropTypes.array.isRequired,
}

function onChange(e){
    setState(getState().set('filtro',e.target.value))
}

/**
 * @function Entrada
 * @param {string} value
 * @param {string} placeholder
 * @return input 
 */
const Entrada = ({value, placeholder})=>(
    <label htmlFor="">
    {value}: <input placeholder={placeholder} onChange={onChange}/>
    </label>
)

Entrada.propTypes = {
    value:PropTypes.string,
    placeholder:PropTypes.string,
}


const RealEntrada = Wrapper(Entrada);
const RealLista = Wrapper(Lista);

class C23 extends Component{
    render(){
        setState(
            getState().merge({
                placeholder: "Buscar",
                value:"Hola",
                items:['uno','dos','tres'],
                filtro:'',
            })
        );

        return(
            <React.Fragment>
                <RealEntrada/>
                <RealLista/>
            </React.Fragment>
        );
    }
}

export default C23;