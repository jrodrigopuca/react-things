import React, {Component} from 'react';

const accionExterna = (e) =>{
    console.log('Función externa')
}

class C06 extends Component{

    //llamar a función externa
    onClick0 = accionExterna.bind(this);
    //llamar a una función simple
    onClick1(){console.log("Función simple")}
    //llamar a función con parametro
    onClick2(texto){console.log(texto)}

    render(){
        return(
            <React.Fragment>
                <button onClick={this.onClick0}>Llamar función externa</button>
                <button onClick={this.onClick1}>Llamar función simple</button>
                <button onClick={this.onClick2.bind(null, 'Función con binding')}>Llamar función con binding</button>
            </React.Fragment>
        )
    }
}

export default C06;