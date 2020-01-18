import {suma} from './c35.jsx';

/**@function test(name, fn, timeout)*/
test('Probando', ()=>{
    expect(true).toBeTruthy(); //probando truthiness
})

/**
 *  Unit test: solo prueba una cosa, en este 
 *  caso la función suma.
 */
test('suma', ()=>{
    const resultado = suma(0,2);
    expect(resultado).toBe(2); //probando matching

    expect(suma(1,2)).toBe(3);
    // expect(suma(1,3)).toBe(2); //aqui muestra el error
    expect(suma(1,3)).toBe(4);
})

// Creando una función de prueba
const funcionPrueba = jest.fn((x,y)=>x+y);
test('test',()=>{   
    expect(funcionPrueba(1,2)).toBe(3);
    expect(funcionPrueba).toHaveBeenCalledTimes(1);
})

// Probando una expresión regular
test('probar exp regular', ()=>{
    const re= new RegExp("\\w+");
    expect('hola').toMatch(re);
})
