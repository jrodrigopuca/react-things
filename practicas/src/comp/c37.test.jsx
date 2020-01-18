import total from './c37.jsx';
/**
 * Integration test
 * prueba que todo puede trabajar junto
 * en este caso: la función total con la función suma
 */
test('total', ()=>{
    expect(total(5,1)).toBe('$6');
})