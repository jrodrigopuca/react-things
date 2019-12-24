import React, {Component} from 'react';

class C12 extends Component{

    state={
        modified: new Date(),
        first:new Date(),
        last:new Date(),
    }

    _click=()=>{
        // al hacer click guarda el valor anterior y actualiza 
        this.setState({first:this.state.last,last:new Date()});
        console.log('tiempo capturado');
    }

    shouldComponentUpdate(props,state){
        return +state.modified > +this.state.modified; //compara el valor númerico de las fechas
    }

    componentDidMount(){
        this.interval = setInterval(()=>this._update(),100);
    }

    _update(){
        this.setState({modified:new Date()});
    }

    render(){
        const {modified, first, last, }= this.state;
        return(
            <>
                <p>actual: {modified.toLocaleString()}</p>
                <button onClick={this._click}>Capturar tiempo</button>
                <p>anterior: {first.toLocaleString()}</p>
                <p>nuevo: {last.toLocaleString()}</p>
            </>
        )
    }
}

export default C12;