import React,{ Component } from "react";
import {Map as Imm, fromJS} from 'immutable';


const ErrorMsg = ({error})=>{
    // muestra aún cuando no haya error
    return Imm().set(null,null).get(error,<p>{error}</p>)
}

const CargaMsg =({carga})=>{
    // muestra aún cuando no haya carga
    return Imm().set(null,null).get(carga,<p>{carga}</p>)
}


class ListaUsers extends Component{

    render(){
        const {error, carga, usuarios}= this.props;
        return(
            <>
                <CargaMsg carga={carga}/>
                <ErrorMsg error={error}/>
                <ul>
                    {usuarios.map(el=>(
                        <li key={el.id}>{el.nombre}</li>
                    ))}
                </ul>
            </>
        )
    }
}



const cancelar=(promesa)=>{
    let cancelado = false;

    // crea un wrapper a la promesa y devuelve un boolean 
    const promesaWrapper = new Promise((resolve, reject)=>{
        promesa.then((val)=>{
            return cancelado? reject({cancelado:true}):resolve(val);
        }, (error)=>{
            return cancelado? reject({cancelado:true}):resolve(error);
        })
    })

    promesaWrapper.cancel= ()=>{cancelado=true;}
    return promesaWrapper;
}


// --- promesa para traer datos
const getUsers = (isFail)=>{
    const dataUsers= [
        {id:0, nombre:'Elliot'},
        {id:1, nombre:'Darlene'},
        {id:2, nombre:'Leon'},
        {id:3, nombre:'Angela'},
    ]

    return cancelar(new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (isFail){
                reject('fallo'); //devuelve como rechazado
            }else{
                resolve({usuarios:dataUsers})
            }
        })
    }))
}


// --- evento para cancelar
const clickCancelar= (e) =>{
    e.preventDefault();
    console.log("cancelado");
}

// --- componente principal 
class C14 extends Component{
    state={
        data: fromJS({error:null, carga:null, usuarios:[]})
    }

    //Imm get
    get data(){
        return this.state.data;
    }

    //Imm set
    set data(data){
        this.setState({data});
    }

    // antes de mostrar
    UNSAFE_componentWillMount(){
        this.data= this.data
            .set('carga', 'cargando');
    }

    render(){
        const datos= this.data.toJS();
        return(
            <ListaUsers clickCancelar={clickCancelar} {...datos} />
        )
    }

    // despues de montar el componente
    componentDidMount(){
        this.job = getUsers();
        //cuando la promesa se cumple
        this.job.then(
            (result)=>{
                // si se cumple
                this.data = this.data
                    .set('error', null)
                    .set('carga', null)
                    .set('usuarios', fromJS(result.usuarios));
            }, 
            (error)=>{
                // si no se cumple
                if(!error.cancelado){
                    this.data= this.data 
                        .set('error','Hubo error')
                        .set('carga', null);
                }
            }
        )
    }

    componentWillUnmount(){
        this.job.cancel();
        console.log('desmontar');
    }
}

// prop por defecto
C14.defaultProps={carga:'carga',};

export default C14;
