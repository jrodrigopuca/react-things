import React, {Component} from 'react';
import cuid from 'cuid';
import {fromJS} from 'immutable';

class Item extends Component{
    render(){
        const {id, titulo, desc, evEliminar} = this.props;
        return(
            <li key={id}>
                {titulo}: {desc}
                <button onClick={evEliminar.bind('null', id)}>❌</button>
            </li>
        )
    }

}

class Elementos extends Component{
    render(){
        const {data, evEliminar} = this.props;

        return data.map((el, index)=>
            <Item key={el.id} id={el.id} titulo={el.titulo} desc={el.desc} evEliminar={evEliminar} />
        )
    }
}

class Cargar extends Component{
    state ={titulo:'', desc:''};

    _cambiarTitulo=(e)=>{
        //console.log(e.target.value);
        this.setState({'titulo':e.target.value});
    }

    _cambiarDesc=(e)=>{
        //console.log(e.target.value);
        this.setState({'desc':e.target.value});
    }

    render(){
        const {evento} = this.props;
        return(
        <div>
            <input placeholder="Ingresar titulo" onChange={this._cambiarTitulo}/>
            <input placeholder="Ingresar descripción" onChange={this._cambiarDesc}/>
            <button onClick={evento.bind(null, this.state.titulo, this.state.desc)}>Cargar</button>
        </div>
        )
    }


}


class C07 extends Component{
    state={
        data: fromJS({
            elementos: [
                {id:cuid(), titulo:'a', desc:'primera letra'},
                {id:cuid(), titulo:'b', desc:'segunda letra'},
                {id:cuid(), titulo:'c', desc:'tercera letra'},
            ],
        })
    }

    get data(){
        return this.state.data;
    }

    set data(data){
        this.setState({data})
    }

    _eliminar = (id)=>{
        //traer el index del elemento
        const index = this.data.get('elementos')
                        .findIndex(e => e.get('id') === id);
        //elimina
        this.data=this.data.update('elementos', e=> e.delete(index));
    }

    _agregar=(titulo, descripcion)=>{
        this.data = this.data.update(
            'elementos', a=> a.push(fromJS({
                id:cuid(),
                titulo:titulo,
                desc: descripcion,
            }))
        )
    }

    render(){
        const {elementos}= this.data.toJS();

        return(
            <React.Fragment>
                <section>
                        <Cargar evento={this._agregar} />
                    <ul>
                        <Elementos data={elementos} evEliminar={this._eliminar}/>
                    </ul>
                </section>
            </React.Fragment>
        )
    }

}
export default C07;