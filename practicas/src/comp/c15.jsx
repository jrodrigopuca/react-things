import React,{ Component } from "react";
import PropTypes from 'prop-types';

/*  Uso el PropTypes para hacer la verificación de tipos y especificar si 
*   una propiedad es opcional o requerida
*   https://es.reactjs.org/docs/typechecking-with-proptypes.html
*/

class MiniSite extends Component{
    render(){
        const {encabezado, contenido} = this.props;

        return(
            <React.Fragment>
                <header>{encabezado}</header>
                <section>{contenido}</section>
            </React.Fragment>
        )
    }
}

/*    Se espera que lleguen:
*    -encabezado: un elemento de React
*    -contenido: un nodo (string, elemnto, array)
*/

MiniSite.propTypes={
    encabezado:PropTypes.element.isRequired,
    contenido:PropTypes.node.isRequired,
    contenido:PropTypes.array,
}

class C15 extends Component{
    render(){
        const encabezado = (<h2>Encabezado</h2>);
        const contenido = [<article>Article 1</article>,<article>Article 2</article>,];
        return(
            <MiniSite {...{encabezado}} {...{contenido}}/>
        )
    }
}

export default C15;
