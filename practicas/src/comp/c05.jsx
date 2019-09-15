import React, {Component} from 'react';
import { get } from 'http';

// usar función
function Lista(props){
    const items= props.items;

    return(
        <ul>
            {items.map(i=>(<li key={i}>{i}</li>))}
        </ul>
    )
}



class C05 extends Component{
    state= {items:[]};

    _esperar(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(['Uno', 'Dos', 'Tres']);
            }, 2000)
        })
    }

    componentDidMount(){
        this._esperar().then(items=> this.setState({items}))
    }

    render(){
        return (
            <Lista {...this.state}></Lista>
        )
    }

}

export default C05;