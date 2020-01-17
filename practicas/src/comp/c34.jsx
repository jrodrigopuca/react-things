import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

/**
 * @description: Crear un modal, un mensaje aparece al navegar, 
 * al hacer click sobre el mismo desaparece. 
 */

/**
 * @function Modal
 * @param {children,onClick} props
 * @return div para hacer el modal 
 */
function Modal(props) {
    let style = {
        position: "absolute",
        left: '10%',
        right: '10%',
        padding: 10,
        color: 'white',
    }

    return (
        <div className="modal" style={style} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

/**
 * @function Colores: funciona como una galeria en '/img', con 'changeShow' salgo del modal.
 * @param {match, location, history} props
 * @returns  links para acceder a los 'modals'
 * Si recibe un 'id' como parametro entonces muestra el modal de lo contrario 
 * solo muestra la galeria
 */

function Colores(props) {
    let color = "#" + props.match.params.id;
    const style = {
        width: "100%",
        height: 200,
        backgroundColor: color,
    }

    const changeShow = () => {        
        props.history.goBack();
    }

    return (
        <>
            <h2>Galeria de Colores</h2>
            <li><Link to="/img/264796">Color 1</Link></li>
            <li><Link to="/img/235796">Color 2</Link></li>
            <li><Link to="/img/248796">Color 3</Link></li>
            {!!props.match.params.id && <Modal onClick={changeShow}>
                <div style={style}>
                    Click para salir del modal
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

/**
 * @function C34: Enlista las rutas posibles, 
 * notar el orden de las rutas, se prioriza buscar el 'id' 
 * para usarlo en el modal.
 */
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