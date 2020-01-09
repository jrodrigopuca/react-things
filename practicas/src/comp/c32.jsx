import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

/**
 * @function Store: Analizo la url y muestro el valor enviado en query.
 * Utilizo el UrlSearchParams para buscar el valor asociado al parámetro
 * luego muestro en el return.
 * @param {object} props
 * @returns component 
 */
function Store(props){
    console.log(props); /* {history, location, match} */
    const urlParams = new URLSearchParams(props.location.search)
    const city= urlParams.get('city');

    return(<>Ciudad: {city}</>)
}

/**
 * @function C32
 * @returns Componente que muestra lista con links, al redireccionar 
 * se muestra la ciudad seleccionada
 */
function C32(){
    return(
        <BrowserRouter>
            <ul>
                <li><Link to="/store?city=Salta">Salta</Link></li>
                <li><Link to="/store?city=Jujuy">Jujuy</Link></li>
                <li><Link to="/store?city=San Luis">San Luis</Link></li>
            </ul>
            <hr/>
            <Route exact path="/store" component={Store}/>
        </BrowserRouter>
    )

}

export default C32;

