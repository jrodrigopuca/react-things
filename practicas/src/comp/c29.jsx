import React,{Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

/**
 *  C29: Mostrar rutas anidada
 */


const Home = () =>(<p>Home!</p>);

const lstDashboard = [
    {name: 'Users',
    id:'usr',
    description: 'My Users are amazing',
    resources:[
        {name:'usr0',id:'usr0', description:'zero'},
        {name:'usr1',id:'usr1', description:'one'},
    ]
    },
    {name: 'Groups',
    id:'gr',
    description: 'My Groups',
    resources:[
        {name:'gr0',id:'gr0',description:'group zero'},
        {name:'gr1',id:'gr1',description:'group one'},
    ]
    },
]

/**
 * @Component Dashboard
 * @param match
 *  Muestra: 
 * - Home
 * - Dashboard
 *      - Users
 *      - Groups
 */

const Dashboard =({match})=>{
    return (
        <>
            {lstDashboard.map(({name,id})=>(
                <li key={id}>
                    <Link to={`${match.url}/${id}`}>{name}</Link>
                </li>
            ))}

            <Route path={`${match.path}/:elemId`} component={Elements}/>
        </>
    )
}

/**
 * @Component Elements
 * @param match
 *  Muestra: 
 * - Home
 * - Dashboard
 *      - Users
 *          - usr0
 *          - usr1
 *      - Groups
 */

const Elements = ({match})=>{
    const getId= match.params.elemId;
    const elem= lstDashboard.find(({id})=> id === getId)
    return(
        <>
            <p>Description: {elem.description}</p>
            {elem.resources.map(({name,id})=>(
                <li key={id}>
                    <Link to={`${match.url}/${id}`}>{name}</Link>
                </li>
            ))}

            <Route path={`${match.path}/:resId`} component={Resources}/>
        </>
    )
}

/**
 * @Component Resources
 * @param match
 *  Muestra: 
 * - Home
 * - Dashboard
 *      - Users
 *          - usr0
 *              descripción
 *          - usr1
 *      - Groups
 */

const Resources = ({match})=>{
    const eleId= match.params.elemId;
    const resId= match.params.resId;

    const rsc= lstDashboard.find(({id})=> id === eleId)
            .resources.find(({id})=> id === resId);
    return(
        <>
            <p>Description: {rsc.description}</p>
        </>
    )
}


/**
 *  @Component C29:
 *  Muestra: 
 * - Home
 * - Dashboard
 */

function C29(){
    return(
        <BrowserRouter>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
        </BrowserRouter>
    )
}

export default C29;