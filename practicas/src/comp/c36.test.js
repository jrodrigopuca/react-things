import React from 'react';
import ReactDOM from 'react-dom';
import C36 from './c36.jsx';


/**
 *  Prueba al componente C36, es similar al test en app.test.js 
 *  crea el elemento, renderiza el elemento y desmonta el elemento
 */
it('renderiza sin romperse', ()=>{
    const div= document.createElement('div');
    ReactDOM.render(<C36/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

