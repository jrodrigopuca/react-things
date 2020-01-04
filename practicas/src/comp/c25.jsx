import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { BrowserRouter } from 'react-router-dom';


/** @Component DecirHola: Solo para probar */
const DecirHola = () => (<p>Hola Route!</p>);

/* 

Uso de Routes en v<4.0
const C25 = () => (
    <Router history={browserHistory}>
        <Route path="/" component={DecirHola} />
    </Router>
)
*/

/**
 *  @Component C25: Uso de React Router
 */
const C25 = () => (
    <BrowserRouter>
        <Route path="/" component={DecirHola} />
    </BrowserRouter>
)

export default C25;