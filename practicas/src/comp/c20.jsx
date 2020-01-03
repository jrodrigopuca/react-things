import React,{Component} from 'react';
import PropTypes from 'prop-types';

/**
 * @class Padre
 * @property usuarios
 * @property grupos
 * @function render (no devuelve nada)
 */
class Padre extends Component{
    static propTypes ={
        usuarios: PropTypes.array.isRequired,
        grupos: PropTypes.array.isRequired
    }

    static defaultProps ={
        usuarios: [],
        grupos:[]
    }

    render(){return null}
}

/**
 * @class Hijo
 * @classdesc Hereda las propiedades del padre
 * 
 * @property usuarios (heredado)
 * @property grupos (heredado)
 * @function render (heredado y sobreescrito)
 */

class Hijo extends Padre {
    render(){
        const {usuarios, grupos} = this.props;

        return(
            <React.Fragment>
                <h2>Usuarios</h2>
                <ul>
                    {usuarios.map(i=>(<li key={i}>{i}</li>))}
                </ul>

                <h2>Grupos</h2>
                <ul>
                    {grupos.map(i=>(<li key={i}>{i}</li>))}
                </ul>
            </React.Fragment>
        )
    }
}

/**
 * @function C81: muestra a Hijo tomando valores de dos constantes
 */

const usuarios = ['User One', 'User Two'];
const grupos = ['Team One', 'Team Two'];

const C20 =()=>(<Hijo {...{usuarios,grupos}}/>);
export default C20;


