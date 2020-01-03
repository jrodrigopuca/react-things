// c8-2
import React, { Component } from 'react';
import { fromJS} from 'immutable';

/**
 * @class Padre: clase con el evento a heredar
 * @function _onClick: si un elemento es 'clickeado' lo tacha, notar la forma con la que uso el 'id' para el binding
 *      @param {number} id: id del item a tachar
 * @function render: muestra la lista de items
 * 
 */

class Padre extends Component {
    state = {
        data: fromJS({ items: [] }),
    }

    get data() {
        return this.state.data;
    }

    set data(data) {
        this.setState({ data });
    }

    _onClick = id => () => {
        this.data = this.data.setIn(['items',id-1,'tachar'],true);
    }

    render() {
        const { items } = this.data.toJS();

        return (
            <ul>
                {items.map(i =>
                    <li key={i.id} onClick={this._onClick(i.id)} style={{ cursor: 'pointer', textDecoration: i.tachar ? 'line-through' : 'none' }}>
                        {i.name}
                    </li>)}
            </ul>
        )
    }
}

/**
 * @class C21: Hereda los eventos del Padre
 * @function _onClick: heredado
 * @function render: heredado 
 * @function componentDidMount: unir los estados, de esta forma mostrará la lista.
 */

class C21 extends Padre {
    componentDidMount() {
        this.data = this.data.merge({
            items: [
                { id: 1, name: 'Click para 1', tachar: false },
                { id: 2, name: 'Click para 2', tachar: false },
                { id: 3, name: 'Click para 3', tachar: false },
                { id: 4, name: 'Click para 4', tachar: false },
            ]
        })
    }
}

export default C21;