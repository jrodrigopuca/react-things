import React,{Component} from "react";

import $ from 'jquery';
import {fromJS} from 'immutable';

import 'jquery-ui/ui/widgets/button';
import 'jquery-ui/themes/base/all.css';


// Creando un boton que utilice a JQueryUI
class ButtonJQ extends Component{

    componentDidMount(){
        this.$btn= $(this.element);
        this.$btn.button(this.props);
        //this.$btn.button({icon:"ui-icon-info"})
    }

    componentWillMount(){
        this.$btn= $(this.element);
        this.$btn.button('destroy');
    }

    render(){
        const {onClick}=this.props;

        return(
            <button ref={el=>this.element=el} onClick={onClick}/>
        )
    }
}

// creo un boton personalizado
class NewButton extends Component{
    state={
        data:fromJS({})
    }

    get data(){
        return this.state.data;
    }

    set data(data){
        this.setState({data});
    }

    componentWillMount(){
        this.data= this.data.merge(
            this.props,{onClick:this.props.onClick.bind(this),}
        );
    }

    render(){
        const data = this.state.data.toJS();
        return(
            <ButtonJQ {...data}/>
        )
    }
}

NewButton.defaultProps={onClick:()=>{},}



class C13 extends Component{

    _sayHello= ()=>{
        console.log("hola!");
    }

    render(){
        return(
            <>
                <NewButton label="click me!" onClick={this._sayHello}/>
                <NewButton icon="ui-icon-gear" />
            </>
        )
    }
}

export default C13;