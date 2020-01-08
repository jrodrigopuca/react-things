import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const About = () => (<section>About me</section>);
const News = () => (<section>News!</section>);
const Home = () => (<p>Home Page</p>);

const NotFound=()=><p>No Encontrado</p>;

/** 
* Forma descripta en: https://reacttraining.com/react-router/web/guides/server-rendering
* lo comentado es utilizable más para el backend
* @todo Esto funciona pero aún debo analizarlo

const NotFound = () => (<Status code={404}> <p>No encontrado</p> </Status>);

function Status({ code, children }) {
    return (
        <Route
            render={({ staticContext }) => {
                
                if (staticContext) {
                    staticContext.status = code;
                }
                
                return children;
            }}
        />
    );
}
*/


/**
 * @function C31: Realiza las rutas y las enlaza con sus componentes
 * @returns
 *      localhost:3000/ => <Home/>
 *      localhost:3000/acerca  => <About/>
 *      localhost:3000/noticias => <News/>
 *      localhost:3000/loquesea => <NotFound/> 
 */
function C31() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/acerca" component={About} />
                <Route path="/noticias" component={News} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default C31;