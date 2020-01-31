import React from 'react';
//import {addTodo} from '../actions';
import C43Cont from './c43_Cont.jsx';
import AgregarItem from './c43_Form.jsx'
/**
 *  Componente 43:
 *  @returns:
 *  - Contenedor de Lista
 *  - Formulario para agregar elementos
 */

const C43 = ()=>(<>
                    <AgregarItem></AgregarItem>
                    <C43Cont></C43Cont>
                </>);
export default C43;