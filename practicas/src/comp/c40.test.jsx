/**
 *  Casos a evaluar:
 * - menos de 4 caracteres: no válido
 * - campos incompletos: no válido
 * - click con formulario vacio: no válido
 */

import React from 'react';
import {shallow} from 'enzyme';
import Adapter from '../setupTests.js';
import Contacto from './C40.jsx';

it('renderiza', ()=>{
    const wrapper= shallow(<Contacto />);
    expect(wrapper).toBeTruthy();
})

it('menos de 4 caracteres', ()=>{
    const wrapper= shallow(<Contacto />);
    wrapper.find('input').simulate("change", { target: { value: "hhh" }})
    expect(wrapper.state('valid').toEqual(false));
})