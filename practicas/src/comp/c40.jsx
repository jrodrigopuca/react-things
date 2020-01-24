import React, {Component} from 'react';
import './c40.css';

class Contacto extends Component{
    state={inputs:{name:false,email:false,message:false}, 
        valid:false}

    _onSubmit(evt){

        let data = new FormData(evt.target);
        const web=this.props.web;   
        fetch(web,{
            method:'POST', body:data
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('success', data);
        })
        .catch(function (error) {
            console.log('error', error);
        });
    }

    _onChange(e, input){
        let inputs = this.state.inputs;
        inputs[input] = e.target.checkValidity();
        console.log('bueno:', inputs);

        let arrayB=Object.values(inputs);
        let validado = arrayB.every((v)=>v===true)
        console.log(validado);

        if (validado ===true){this.setState({valid:true})} else {this.setState({valid:false})}
    }
        
    render(){       
        //const {input,valid} = this.state;
        return(
            <form method="POST" onSubmit={(e)=>this._onSubmit(e)} action={this.props.web} >
                <legend>Contacto</legend>
                <input type="text" name="name" placeholder="tu nombre"  minLength="4" required onChange={(e)=>this._onChange(e, "name")}/>
                <input type="email" name="_replyto" placeholder="tu correo" required onChange={(e)=>this._onChange(e, "email")}/>
                <textarea name="message" placeholder="tu mensaje" rows="3" minLength="4" maxLength="100" required onChange={(e)=>this._onChange(e, "message")}/>
                {!!this.state.valid && <input type="submit" value="Enviar"/>}
            </form>
        )
    }
}

const C40 = () => <Contacto web="https://formspree.io/xlejzwly"/>;

export default C40;




