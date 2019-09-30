// Componente C02: Cambia texto de label

import React, {Component} from 'react';

class C02 extends Component{
    constructor(props){
        super(props);
        this.state={miTexto:""};
        //obtengo el "e"
        this.cambiarTexto = this.cambiarTexto.bind(this);
        this.saludar = this.saludar.bind(this);
    }

    saludar(e){
        console.log(e.key)
    }

    cambiarTexto(e){
        this.setState({miTexto:e.target.value})
    }

    render(){
        let texto=this.state.miTexto;

    return(
        <form>
            <input type="text" onChange={this.cambiarTexto} onKeyPress={this.saludar} placeholder="escribe algo"></input>
            <label>{texto}</label>
        </form>
    )
    }
}

export default C02;