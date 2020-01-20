import  React from 'react';
import C38 from './c38.jsx';
import renderer from 'react-test-renderer';

it('renderiza',()=>{
    const tree = renderer.create(<C38>Click me</C38>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

