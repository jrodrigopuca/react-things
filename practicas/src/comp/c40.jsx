import React, {Component} from 'react';
import './c40.css';

class Contacto extends Component{
    state= {Listo:false};

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

    _onChange(e){
        console.log(e.target.checkValidity());
    }
        //<input type="submit" value="Enviar" pattern="[A-Za-z]{3}"/>
    render(){       
        const Listo= this.state;
        return(
            <form className={Listo?'error':''} method="POST" onSubmit={(e)=>this._onSubmit(e)} action={this.props.web} onChange={(e)=>this._onChange(e)}>
                <legend>Contacto</legend>
                <input type="text" name="name" placeholder="tu nombre"  minLength="4" required/>
                <input type="email" name="_replyto" placeholder="tu correo" required/>
            
                <textarea name="message" placeholder="tu mensaje" rows="3" minLength="4" required/>
                <input type="submit" value="Enviar" required/>
                
            </form>
        )
    }
}

const C40 = () => <Contacto web="https://formspree.io/xlejzwly"/>;

export default C40;




