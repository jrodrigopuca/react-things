import React, {Component} from 'react';

// Componente C01: Muestra reloj

class C01 extends Component{
    constructor(props){
        super(props);
        this.state={min:0};
    }

    minuto(){
        let fecha= new Date().toLocaleTimeString();
        this.setState({min:fecha});
    }
    
    componentDidMount(){
        //actualizar cada un segundo
        this.interval = setInterval(() => this.minuto(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render(){
        return(
            <p>Reloj: {this.state.min} </p>
        )
    }
}

export default C01;