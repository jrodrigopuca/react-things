import React, {Component} from 'react';
import {fromJS} from 'immutable';

/**
 *  Padre: Tiene a 'data' y las funciones de acceso
 */

class Padre extends Component{
    state={
        data:fromJS({
            texto: 'Saludos',
            enabled: false,
        })
    }

    get data(){
        return this.state.data;
    }

    set data(data){
        this.setState({data});
    }
    
    render(){
        return null;
    }
}


/**
 * Hijo
 * @returns input usando el estado 'data' del Padre
 */

class Hijo extends Padre{

    componentDidMount(){
        // Unión de los datos:
        const dataH= fromJS({
            placeholder:'Escribe algo',
            enabled: true,
        })

        this.data= this.data.merge(dataH);
    }

    render(){
        const {enabled, texto, placeholder} = this.data.toJS();
        return(
            <label htmlFor="entrada">
                Escribir:
                <input type="text" placeholder={placeholder} disabled={!enabled} defaultValue={texto}/>
            </label>
        )
    }
}

/**
 * C19: Accede a Hijo (input)
 */
const C19 = () => (<Hijo/>);
export default C19;