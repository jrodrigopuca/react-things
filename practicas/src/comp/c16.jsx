import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ParaValidar extends Component{
    render(){
        const {vString, vNumber, vBool, vFunction, vArray, vObject, value, max} =this.props;
        return(
            <React.Fragment>
                <h1>{vString}</h1>
                <p> {vNumber}</p>
                <progress {...{max,value}} />
                <ul>
                    {vArray.map(i=>(<li key={i}>{i}</li>))}
                </ul>
                <p>
                    <input type="checkbox" defaultChecked={vBool}/>
                    <input type="button" onClick={vFunction} value={vObject.prop}/>
                </p>
            </React.Fragment>
        )    
    }
}

ParaValidar.propTypes={
    vString: PropTypes.string,
    vNumber: PropTypes.number, 
    vBool: PropTypes.bool, 
    vFunction: PropTypes.func, 
    vArray: PropTypes.array, 
    vObject: PropTypes.object, 
    value: PropTypes.number.isRequired, 
    max: PropTypes.number.isRequired
}


class C16 extends Component{
    state={value:0}

    componentDidCatch(){
        console.log('Hola');
    }

    render(){
        const {value}=this.state;

        setTimeout(()=>{
            if (value <100){
                this.setState({value: value +1})
            }else{this.setState({value:0})}
            
        }, 1000)

        const datos={
            vString:'Hola', 
            vNumber:value, 
            vBool:true, 
            vFunction:()=>{console.log('Hi')}, 
            vArray:[1,2,3], 
            vObject:{prop:'click me!'},
            value:value,
            max:100
        }
        return(<ParaValidar {...datos}/>)
    }
}

export default C16;