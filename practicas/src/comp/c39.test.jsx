import React from 'react';
import {shallow} from 'enzyme';
import Adapter from '../setupTests.js'
import C38 from './C38.jsx';

/**
 *  Usando enzyme
 *  formas de render con enzyme
 *  - shallow: renderiza una versión basica [https://airbnb.io/enzyme/docs/api/shallow.html]
 *  - mount: full rendering [https://airbnb.io/enzyme/docs/api/mount.html]
 *  - render: estatico, utiliza otra libreria, genera html [https://airbnb.io/enzyme/docs/api/render.html]
 *  diferencias: [https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913]
 *  
 *  Los ejemplos siguientes utilizan shallow, 
 *  para probar unicamente al componente de manera 
 *  aislada
 * 
 */

it('renderiza', ()=>{
    const wrapper= shallow(<C38>Hola</C38>);
    expect(wrapper).toBeTruthy();
})

it('buscar parte del componente', ()=>{
    const wrapper= shallow(<C38>Hola</C38>);
    expect(wrapper.find('a')).toHaveLength(1);
})

it('buscar prop',()=>{
    const props={website:"www.google.com"};
    const wrapper= shallow(<C38 {...props}>Hola</C38>);
    expect(wrapper.find('a').prop('href')).toEqual(props.website);
})

it('invocar evento',()=>{
    const wrapper= shallow(<C38>Hola</C38>);
    expect(wrapper.state('estado')).toEqual('normal');
    wrapper.find('a').invoke('onClick')(); // invocar al evento
    expect(wrapper.state('estado')).toEqual('clickeado');
})
