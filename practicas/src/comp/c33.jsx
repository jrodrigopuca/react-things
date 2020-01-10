import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch, Prompt } from 'react-router-dom';

const Home = () => (<p>Home</p>);


/**
 * @class Form: Muestra un form, si se esta escribiendo algo y el usuario se quiere ir muestra un mensaje 
 * y puede bloquear la navegación.
 * @function _onChange: captura el valor del input y lo guarda en state
 * @function render: Si hay algo en state muestra el Prompt
 * !! = convierte a booleano
 * 
 */
class Form extends Component {
    state = { name: "" };

    _onChange = (e) => {
        console.log(e.target.value);
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <>
                <Prompt when={!!this.state.name} message={location=>'estas seguro?'}/>
            <form action="">
                <h3>Formulario</h3>
                <label to="nametxt">Ingresa tu nombre</label>
                <input type="text" name="nametxt" value={this.state.name} onChange={this._onChange} />
            </form>
            </>
        )
    }
}


function C33() {

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/form" component={Form} />
            </Switch>
        </BrowserRouter>
    )
}

export default C33;


