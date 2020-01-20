import React,{ Component } from "react";

class C38 extends Component{
    constructor(){
        super();
        this.state={
            estado: "normal",
        }
    }

    _onClick=()=>{
        this.setState({estado:'clickeado'});
    }

    render(){
        return(
            <a href={this.props.website || "#"} onClick={this._onClick}>
                {this.props.children} 
            </a>
        )
    }
}

export default C38;