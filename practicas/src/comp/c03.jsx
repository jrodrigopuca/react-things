import React, {Component} from 'react';

// estados 
class C03 extends Component{
    state={
        number:0,
        text:"a",
    }

    render(){
        const {number, text} = this.state;

        setTimeout(()=>{
            this.setState({number: number +1})
        }, 1000)

        return(
            <React.Fragment>
                <h3>{text}</h3>
                <h3>{number}</h3>
            </React.Fragment>
        )
    }
}

export default C03;