import React, {Component} from 'react';
import {fromJS} from 'immutable';

class Lista extends Component{
    state={
        data:fromJS({
            items: new Array(11).fill(null).map((v,i)=>i+1)
        })
    }

    get data(){
        return this.state.data;
    }

    set data(data){
        this.setState({data})
    }

    render(){
        const items= this.data.get('items');
        return(
            <ul>
                {items.map(i=>(<li key={i}>{i}</li>))}
            </ul>
        )
    }
}


class C11 extends Component{
    render(){
        return(
            <>
                <Lista />
            </>
        )
    }
}

export default C11;