import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { BrowserRouter } from 'react-router-dom';


/** @Component DecirHola: Solo para probar */
const DecirHola = () => (<p>Hola Route!</p>);

/* 
Uso de Routes en <v4.0
más info: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md

const C25 = () => (
    <Router history={browserHistory}>
        <Route path="/" component={DecirHola} />
    </Router>
)
*/

/**
 *  @Component C25: Uso de React Router
 *  el BrowserRouter crea una envoltura del mismo modo que lo hacia el browserHistory
 */
const C25 = () => (
    <BrowserRouter>
        <Route path="/" component={DecirHola} />
    </BrowserRouter>
)

export default C25;