import React,{Component} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

/**
 * usando el Router
 * 
 * Se especifica la ruta y el contenido a mostrar
 * Sin embargo lo que se especifica en raíz ("/") se muestra en los demás 
 * Ej: Si vamos a "/news" veremos el contenido de <Home> y de <News/>
 * 
 */

const About = ()=>(<section>About me</section>);
const News = ()=>(<section>News!</section>);
const Home =()=>(<p>Home Page</p>);


function C26(){
    return(
        <Router>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/news" component={News}/>
        </Router>
    );
}

export default C26;



