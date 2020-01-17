import {suma} from './c35.jsx';

/**@function test(name, fn, timeout)*/
test('Probando', ()=>{
    expect(true).toBeTruthy();
})

/**
 *  Unit test: solo prueba una cosa, en este 
 *  caso la función suma.
 */
test('suma', ()=>{
    const resultado = suma(0,2);
    expect(resultado).toBe(2);

    expect(suma(1,2)).toBe(3);
    // expect(suma(1,3)).toBe(2); //aqui muestra el error
    expect(suma(1,3)).toBe(4);
})


