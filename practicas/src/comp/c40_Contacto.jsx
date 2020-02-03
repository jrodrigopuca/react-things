import React, { Component } from 'react';
import './c40.css';

/**
 * @class Contacto
 * @constructor: definir los estados (uno para cada input y uno general)
 * @function _onSubmit: enviar los datos a Formspree para que los distribuya como un email,
 * no se utilizo el e.preventDefault() porque el formulario una vez enviado necesita redireccionar.
 * @function _onChange: ir validando los datos a medida que el user vaya escribiendo
 * @function render: mostrar los campos del formulario
 * 
 * @todo: agregar recaptcha, para implementar agregar un id provisto por formspree
 */

export default class Contacto extends Component {
    constructor() {
        super();
        this.state = {
            inputs: { name: false, email: false, message: false },
            valid: false, 
            finished: false,
            finihedWithError: false
        }
    }


    _onSubmit(evt) {
        evt.preventDefault();
        let data = new FormData(evt.target);       
        //console.log([...data]);
        data=JSON.stringify(Object.fromEntries(data));
        const web = `https://formspree.io/${this.props.formID}`;
        

        let myHeaders = new Headers({
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            "Content-type": "application/json"
        });
        let options = { method: 'POST', headers: myHeaders, mode: 'cors' };
        let nRequest = new Request(web, options);
        let self = this;
        fetch(nRequest, {
            body: data,
        }).then(function (response) {
            //console.log('respuesta', response);
            return response.json();
        })
            .then(function (data) {
                self.setState({finished:true});
                //console.log('success', data);
            })
            .catch(function (error) {
                self.setState({finishedWithErrors:true})
                //console.log('error', error);
            });
        
        evt.target.reset();
    }

    _onChange(e, input) {
        let inputs = this.state.inputs;
        inputs[input] = e.target.checkValidity();
        //console.log('entradas:', inputs);

        let arrayB = Object.values(inputs);
        let validado = arrayB.every((v) => v === true)
        //console.log(validado);

        if (validado === true) { this.setState({ valid: true }) } else { this.setState({ valid: false }) }
    }

    render() {
        const {valid, finished, finishedWithErrors} = this.state;
        return (
            <form method="POST" onSubmit={(e)=>this._onSubmit(e)} action="">
                <legend>Contacto</legend>

                {!!finished && <legend className="msgFinish"> Formulario enviado correctamente</legend>}
                {!!finishedWithErrors && <legend className="msgError"> Un error ha ocurrido</legend>}
                
                <input type="text" name="name" id="name" placeholder="tu nombre" minLength="4" required onChange={(e) => this._onChange(e, "name")} />
                <input type="email" name="_replyto" id="_replyto" placeholder="tu correo" required onChange={(e) => this._onChange(e, "email")} />
                <textarea name="message" id="message" placeholder="tu mensaje" rows="3" minLength="4" maxLength="100" required onChange={(e) => this._onChange(e, "message")} />
                {!!valid && <input type="submit" value="Enviar" />}
                
            </form>
        )
    }
}

Contacto.defaultProps = { formID: 'form_ID', };
