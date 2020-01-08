import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { HashRouter } from 'react-router-dom';

/**
 * Probar en http://localhost:3000/#/hola
 * 
 * BrowserRouter: Puede ser usado cuando hay una llamada al servidor
 * HashRouter: Puede ser usado para páginas estaticas. Utiliza el numeral 
 * para distinguirse.
 */



/** @Component DecirHola: Solo para probar */
const DecirHola = () => (<p>Hola HashRouter!</p>);

/**
 *  @Component C28: Uso del HashRouter (basado en C25 para comparar)
 */
const C28 = () => (
    <HashRouter>
        <Route path="/hola" component={DecirHola} />
    </HashRouter>
)

export default C28;