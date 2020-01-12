import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

function Modal(props){
    
    let contenido = props.contenido;
    let style={
        position:"absolute",
        background:"#fff",
        left:'10%',
        right:'10%',
        padding:10,
    }

    return(
        <div className="modal" style={style}>
            {contenido}
        </div>
    )
}

function Colores(props){
    let color= props.match.id;
    return(
        
    )
}

function C34(){
    render(
        <BrowserRouter>
            <Switch>
                <Route path="/img/:id" children={Colores}/>
            </Switch>
        </BrowserRouter>
    )
}