import React from 'react';
import {shallow} from 'enzyme';
import Adapter from '../setupTests.js'
import C38 from './C38.jsx';

it('renderiza', ()=>{
    shallow(<C38>Hola</C38>);
})