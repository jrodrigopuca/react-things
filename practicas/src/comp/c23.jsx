import React, {Component} from 'react';
import {fromJS} from 'immutable';
import PropTypes from 'prop-types';


/**
 * Usando el pensamiento detrás de Redux
 * hago una lista de componentes 
 * y un map de estados (que puedan ser compartidos entre componentes)
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
 * @function Entrada
 * @param {string} value
 * @param {string} placeholder
 * @return input 
 */
const Entrada = ({value, placeholder})=>(
    <label htmlFor="">
    {value}: <input placeholder={placeholder}/>
    </label>
)

Entrada.propTypes = {
    value:PropTypes.string,
    placeholder:PropTypes.string,
}


const RealEntrada = Wrapper(Entrada);

class C23 extends Component{
    render(){
        setState(
            getState().merge({
                placeholder: "Buscar",
                value:"Hola",
            })
        );

        return(
            <React.Fragment>
                <RealEntrada/>
            </React.Fragment>
        );
    }
}

export default C23;