import React,{Component} from 'react';
import {BrowserRouter as Router, Switch,Route, Link, withRouter} from 'react-router-dom';

/**
 * 
 */

const style={
    listStyleType:'none',
    margin:0,
    padding:0,    
    display:'inline',
    backgroundColor: 'white'
}

const Nav = ()=>{
    return(
        <nav>
            <ul >
                <Link to="/"><li style={style}>Home</li></Link>
                <Link to="/about"><li style={style}>About</li></Link>
                <Link to="/news"><li style={style}>News</li></Link>
            </ul>
        </nav>
    )
}

const About = ()=>(<section><Nav/> <p>About me</p></section>);
const News = ()=>(<section><Nav/> <p>News!</p></section>);
const Home =()=>(<section><Nav/> <p>Home Page</p></section>);


function C27(){
    return(
        <Router>
            <Switch> 
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/news" component={News}/>
            </Switch>
        </Router>
    );
}

export default C27;



