import React, {Component} from 'react';

/* 
*   Diagrama del ciclo de vida:
*   http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
*   Referencia: (+) eventos comunes (-) no tan usados
*/


class CicloVida extends Component{

    //---eventos iniciales (MOUNTING) ---
    constructor(props){
        //+ constructor 
        super(props);
        this.state={texto:1};
    }
    /*
        También es usado el render() como ev. inicial 
    */

    componentDidMount(){
        //+ es invocado inmediamente despues de un componente es montado
        this.setState({texto:2});
        console.log("montando elemento", this.state)
    }
    
    //--- eventos re-render (UPDATING)---

    shouldComponentUpdate(nextProps, nextState) {
        //- este metodo ocurre antes de actualizar el elemento, 
        // util para optimizar
        console.log('debería actualizar?:',nextState);
        return true; //aceptar la actualización
    }

    render(){
        //+ renderiza el componente
        console.log("render", this.state);
        return(<p>Ver consola: {this.state.texto}</p>)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        //- previo a llegar al DOM
        console.log('antes de actualizar el DOM')
        return null;
    }

    componentDidUpdate(prevProps, prevState){
        //+ cuando llega al DOM
        console.log('DOM actualizado')
    }

    //--- evento final (UNMOUNTING)---

    componentWillUnmount(){
        //+ cuando es desmontado
        console.log('terminar');
    }

    componentDidCatch(error, info){
        console.log(error, info);
    }

}

function C09(){
    return(
        <CicloVida />
    )
}

export default C09;
