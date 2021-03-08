/** Usando JEST */

const duplicar = (a)=>a*2;

test("nombre del test", ()=>{
    //testing
    expect(duplicar(4)).toBe(8);
})

