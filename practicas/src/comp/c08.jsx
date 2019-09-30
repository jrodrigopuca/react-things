import React, {Component} from 'react';
import {Map as MapIm, fromJS} from 'immutable';
import cuid from 'cuid';


const ErrorMsg = ({error}) =>{
    return MapIm().set(null, null).get(error, <strong>{error}</strong>)
}

const CargaMsg = ({carga}) =>{
    return MapIm().set(null, null).get(carga, <i>{carga}</i>)
}


class ListaUsuarios extends Component{

    render(){
        const {error, carga, usuarios} = this.props;
        return(
            <React.Fragment>
                <ErrorMsg error={error} />
                <CargaMsg carga={carga} />
                <ul>
                    {usuarios.map(el=>(
                        <li key={el.id}>
                            <i>{el.nombre}</i> 
                            <br/>
                            <small>z{el.id}</small>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

const getUsers = (isFail)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(
            ()=>{
                if (isFail){ reject('FAIL!')}
                else{
                    resolve(
                        {usuarios:[{id:cuid(), nombre:'A'},{id:cuid(), nombre:'B'}]}
                    )
                }
            }
            , 2000)

    })

}


class C08 extends Component{
    state={
        data:fromJS({error:null, carga:null, usuarios:[]})
    }

    get data(){
        return this.state.data;
    }

    set data(data){
        this.setState({data});
    }

    componentWillMount(){
        this.data= this.data.set('carga', 'cargando');
    }

    render(){
        const datos= this.data.toJS();
        return (<ListaUsuarios {...datos} />)
    }

    componentDidMount(){
        //cuando la promesa se cumple 
        getUsers().then(
            (result)=>{
                //si se cumple
                this.data= this.data
                    .set('error', null)
                    .set('carga', null)
                    .set('usuarios',fromJS(result.usuarios));
            },
            (reject)=>{
                this.data= this.data
                    .set('error', 'Hubo un error'+reject)
                    .set('carga', null);

            }
        )
        
    }

}

C08.defaultProps={carga:'carga',};

export default C08;
