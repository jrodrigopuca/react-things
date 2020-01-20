import React from 'react';
import C38 from './c38.jsx';
import renderer from 'react-test-renderer';

/**
 * Test debería incluir:
 * - Renderizar un componente 
 * - Renderizar un componente con props
 * - Interacturar con el resultado o lo renderizado
 * 
 * No debería incluir
 * - Nada que el usuario no vea, se debe considerar al componente como una caja negra.
 * - Estados
 * - Nombre de componentes
 * - CSS clases/ selectores
 * - 
 */

/**
 *  Usando react-test-renderer en este ejemplo se crea un 
 *  snapshot o captura del árbol y 
 *  probar que la estructura no cambia.
 * 
 *  Más documentación: https://es.reactjs.org/docs/test-renderer.html
*/

it('renderiza',()=>{
    let tree = renderer.create(<C38>Click me</C38>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renderiza con parametro',()=>{
    let tree = renderer.create(<C38 website="www.yardev.net">Click me</C38>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('interactuando',()=>{
    let componente = renderer.create(<C38>Click me</C38>);
    let tree= componente.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick(); //manualmente ejecuta el evento
    tree= componente.toJSON();
    expect(tree).toMatchSnapshot();
});