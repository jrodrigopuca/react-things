/**
 *  Casos a evaluar:
 * - renderiza
 * - formulario vacio: no válido
 * - menos de 4 caracteres: no válido
 * - campos incompletos: no válido
 * 
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import Adapter from '../setupTests.js';
import Contacto from './C40_Contacto.jsx';

it('renderiza', ()=>{
    const wrapper= shallow(<Contacto />);
    expect(wrapper).toBeTruthy();
    wrapper.unmount();
})

it('inicialmente no válido', ()=>{
    const wrapper= shallow(<Contacto />);
    expect(wrapper.state('valid')).toEqual(false);
    wrapper.unmount();
})

it('modificando input',()=>{
    const wrapper= mount(<Contacto />);
    const input=wrapper.find('#name');
    input.instance().value="aaaa";
    input.simulate('change');
    
    let estados=wrapper.state(); 
    expect(estados.inputs.name).toEqual(true);
    expect(estados.valid).toEqual(false);
    wrapper.unmount()
})


it('modificando 3 entradas',()=>{
    const wrapper= mount(<Contacto />);

    console.log("----")
    const input=wrapper.find('#name');
    input.instance().value="aaaa";
    input.simulate('change');
    //resultado: {name:true, email:false, message:false}, false

    const input2=wrapper.find('#_replyto');
    input2.instance().value="aaa@a.com";
    input2.simulate('change');
    //resultado: {name:true, email:true, message:false}, false

    const input3=wrapper.find('#message');
    input3.instance().value="aaaa";
    input3.simulate('change');
    //resultado: {name:true, email:true, message:true}, true

    let estados=wrapper.state(); 
    expect(estados.valid).toEqual(true);
    wrapper.unmount()
})