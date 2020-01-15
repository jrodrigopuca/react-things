import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

function Modal(props) {
    let style = {
        position: "absolute",
        left: '10%',
        right: '10%',
        padding: 10,
        color: '#f0ff00',
    }

    return (
        <div className="modal" style={style} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

function Colores(props) {

    let color = "#" + props.match.params.id;
    const style = {
        width: "100%",
        height: 200,
        backgroundColor: color,
    }
    //props.history.push(props.match.url);

    const changeShow = () => {
        //show = false;
        console.log(props.history);
        props.history.goBack();
    }

    return (
        <>
            texto texto texto
            <li><Link to="/img/264796">Color 1</Link></li>
            <li><Link to="/img/235796">Color 2</Link></li>
            <li><Link to="/img/248796">Color 3</Link></li>
            {!!props.match.params.id && <Modal contenido={color} onClick={changeShow}>
                <div style={style}>
                    Mooooodal
            </div>
            </Modal>}

        </>
    )
}

function Home() {
    return (
        <ul>
            <li><Link to="/img/">Ir a galeria de colores</Link></li>
        </ul>)
}


function C34() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" children={Home} />
                <Route path="/img/:id" children={Colores} />
                <Route path="/img/" children={Colores} />

            </Switch>
        </BrowserRouter>
    )
}

export default C34;