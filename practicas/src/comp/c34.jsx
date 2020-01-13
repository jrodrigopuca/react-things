import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

function Modal(props) {

    let contenido = props.contenido;
    let style = {
        position: "absolute",
        left: '10%',
        right: '10%',
        padding: 10,
        color: '#f0ff00',
    }

    /*
    const click= ()=>{console.log("salir")};
    <button onClick={click}>x</button>
    */

    return (
        <div className="modal" style={style} onClick={props.onClick}>
            {props.children}
            
        </div>
    )
}

function Colores(props) {
    let color= "#"+props.match.params.id;
    const style={
        width:"100%",
        height:200,
        backgroundColor:color,
    }
    return (
        <>
        texto texto texto
        <Modal contenido={color} onClick={()=>{props.history.push(props.match.url);}}>
            <div style={style}>
                Mooooodal
            </div>
        </Modal>
        </>
    )
}

function Home(){
    return(
    <ul>
        <li><Link to="/img/ff00ff">Color 1</Link></li>
    </ul>)
}


function C34() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" children={Home}/>
            <Route path="/img/:id" children={Colores} />
            </Switch>
        </BrowserRouter>
    )
}

export default C34;