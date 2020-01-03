/**
 *  @description: Renderiza el componente <Simple/> si el wrapper recibe un true
 */

import React, {Component} from 'react';


/**
 * @function Simple: Componente simple a renderizar
 */
const Simple = () => (<b>Hola Mundo</b>);


/**
 * @function Wrapper: Función Higher-Order
 * @param {Component} Componente 
 * @param {function} predicado 
 * @returns Nuevo Componente
 */

const Wrapper = (Componente, predicado) => (
    props => predicado() && (<Componente {...props} />)
)

/**
 * @class C22: Muestra un componente
 * @function render: usa el wrapper, al pasarle false al wrapper el componente no se renderiza.
 */
class C22 extends Component{
    render(){
        const Visible = Wrapper(Simple, ()=>true);
        const Invisible = Wrapper(Simple, ()=>false);

        return(
            <React.Fragment>
                visible: <Visible/>
                invisible: <Invisible/>
            </React.Fragment> 
        );
    }
}

export default C22;
