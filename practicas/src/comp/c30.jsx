import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


/**
 * Uso del match para obtener información de la ruta
 */


/**
 * @function Recibir 
 * @param {object} match
 * @returns valores del match
 * Probando en http://localhost:3000/b/33
 *      valor id: 33
 *      path: /b/:id
 *      url: /b/33
 */


const Recibir = ({ match }) => {
    const id = match.params.id;
    return (
        <>
            <p> valor id: {id} </p>
            <p> path: {match.path}</p>
            <p> url: {match.url}</p>
        </>
    )
}

const style={
    listStyleType:'none',
    margin:0,
    padding:0,    
    display:'inline',
    backgroundColor: 'white'
}


/**
 * @function C30: Muestra una lista con direcciones, al acceder muestra los detalles del match
 * @return component 
 */
const C30 = () => (
    <>
        <Router>
            <ul>
                <li><Link to="/b/33" style={style}>33</Link></li>
                <li><Link to="/b/34" style={style}>34</Link></li>
            </ul>

            <Route path="/b/:id" component={Recibir} />
        </Router>
    </>
)

export default C30;

