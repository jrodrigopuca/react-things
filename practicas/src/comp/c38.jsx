import React,{ Component } from "react";

class C38 extends React.Component{
    constructor(){
        super();
        this.state={
            estado: "normal",
        }
    }

    render(){
        return(
            <a href={this.props.website || "#"}>
                {this.props.children}
            </a>
        )
    }
}

export default C38;