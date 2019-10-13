import React, {Component, Fragment} from 'react';
import {fromJS} from 'immutable';

//Actulizando estado con propiedades

class Btn extends Component{

    render(){
        const {clicks, isDisabled, text, onClick} = this.props;
        return(
            <Fragment>
                <p>Cantidad:{clicks}</p>
                <button disabled={isDisabled} onClick={onClick}>{text}</button>
            </Fragment>
        )
    }
}

class C10 extends Component{

    state={
        data:fromJS({clicks:0, isDisabled:false, text:''}),
    }

    set data(data){
        this.setState({data});
    }

    get data(){
        return this.state.data;
    }

    _onClick=()=>{
        this.data= this.data.update('clicks', c=>c+1)
    }

    // si hay 
    componentWillMount(){
        this.data = this.data.set('text', this.props.text);
    }


    //si hay un cambio en el state renderiza
    shouldComponentUpdate(props,state){
        console.log("debería actualizar");
        return this.data !== state.data;
    }


    render(){
        const datos = this.data.toJS();
        return(
            <Btn {...datos} onClick={this._onClick} />
        )
    }
}

C10.defaultProps={text:'Click!'};

export default C10;