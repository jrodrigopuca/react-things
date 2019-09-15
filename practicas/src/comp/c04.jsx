import React, {Component} from 'react';

// clase con props
class Aux extends Component{
    render(){
        const {items} = this.props;
        return(
        <ul>
            {
                // iterar los elementos 
                items.map(i=>(<li key={i}>{i}</li>))
            }
        </ul>
        )

    }
}

// clase que llama a otra clase con props
class C04 extends Component{
    render(){
        const i= [... Array(4).keys()]
        return(
            
            <Aux items={i}></Aux>
        )
    }
}

export default C04;