import React,{ Component } from "react";

/**
 * Devuelve el componente para validar
 * @param {array} vArray
 * @param {number} vNumber
 * 
 */
const Validar = ({vArray, vNumber})=>(
    <React.Fragment>
        {vNumber<100? (<h3>Número de la suerte: {vNumber}</h3>) : (<p>No hay número</p>)}
        <ul>
            {vArray.map(i=>(<li key={i}>{i}</li>))}
        </ul>
    </React.Fragment>
);

// si los valores no son los correctos muestra un error en consola.
Validar.propTypes={
    vNumber:(props,name,component)=>
        (props[name]<100) ? null : new Error(`${component} ${name}: menor a 100`),
    vArray:(props,name,component)=>
        (props[name].length!==0) ? null : new Error('Array vacio'),
}

Validar.defaultProps={
    vNumber: 42,
    vArray: [1,2,3,4]
}

/**
 *  C18: Llama al <Validar/>
 *  data: datos buenos
 *  data2: datos que producen error, ver en consola
 */

class C18 extends Component{
    render(){
        const data={
            vNumber:3,
            vArray:[5,6]
        }

        const data2={
            vNumber: 103,
            vArray:[]
        }

        return(<Validar {...data}/>)
    }
}

export default C18;


