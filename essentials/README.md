```
npx create-react-app essentials

```

### ReactDOM.render
Función para mostrar un componente, primero se elige lo que se va mostrar y luego el lugar
Ejemplos:
```
// muestro App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// creo un elemento h1 y lo muestro en #root
ReactDOM.render(
  React.createElement("h1", null, "Hola"),
  document.getElementById('root')
);


//Renderizo un jsx
ReactDOM.render(
  <ul>
    <li>Uno<li>
    <li>Dos</li>
  </ul>,
  document.getElementById('root')
);

```

### React.createElement
Primero el elemento, luego los properties y luego el contenido
```
    React.createElement("h1", {style:{color:"blue"}}, "Hola")

    React.createElement("ul", null, 
        React.createElement("li",null,"Lunes"),
        React.createElement("li",null,"Martes"),
        React.createElement("li",null,"Miercoles"),
        React.createElement("li",null,"Jueves"),
        React.createElement("li",null,"Viernes")
    )
```

### Creando componente
```
function Main(){
  return(
    <header>
      <h2>Aqui servimos rica comida</h2>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
```

### Agregando propiedades al componente
```
function Footer(props){
  const {year}=props;
  return(
    <header>
      <h3>Desde {year}</h3>
    </header>
  );
}


function App() {
  return (
    <div className="App">
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}
```

### Renderizar lista
```
function Main(props){
  return(
    <header>
      <h2>Aqui servimos rica comida</h2>
      <ul>
        {props.dishes.map(dish=> <li>{dish}</li>)}
      </ul>
    </header>
  );
}

const dishes= ["Bife con puré", "Milanesa con ensalada mixta","Chop suey"];

function App() {
  return (
    <div className="App">
      <Main dishes={dishes} />
    </div>
  );
}
```

### Lista: asegurar que cada elemento tenga un key
```
function Main(props){
  return(
    <header>
      <h2>Aqui servimos rica comida</h2>
      <ul>
        {props.dishes.map((dish, index)=> <li key={index}>{dish}</li>)}
      </ul>
    </header>
  );
}

const dishes= ["Bife con puré", "Milanesa con ensalada mixta","Chop suey"];

function App() {
  return (
    <div className="App">
      <Main dishes={dishes} />
    </div>
  );
}
```

### Lista: asegurar que cada elemento tenga un key con objetos
```
function Main(props){
  return(
    <header>
      <h2>Aqui servimos rica comida</h2>
      <ul>
        {props.dishes.map((dish)=> <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </header>
  );
}

const dishes= ["Bife con puré", "Milanesa con ensalada mixta","Chop suey"];
const dishesObject= dishes.map((dish,index)=>({id:index, title:dish}))

function App() {
  return (
    <div className="App">
      <Main dishes={dishesObject} />
    </div>
  );
}
```

### Imagen: mostrar imagen 
```
import cover from './cover.jpg'

function Main(props){
  return(
    <header>
      <img src={cover} alt="imagen"/>
    </header>
  );
}
```

### Fragment
Sirve para poner más de dos componentes y evitar usar el elemento Div
```
//Renderizo un jsx
ReactDOM.render(
  <React.Fragment>
    <App>
    <OtraApp>
  </React.Fragment>,
  document.getElementById('root')
);

```

### Conditional
Para solamente mostrar un componente de acuerdo a una condición
```
function App(props){
  return(
    <>
      {props.autorizado? <ComponenteSecreto/>: <ComponenteRegular/>}
    </>
  )
}
```

### Desestructurando array y objetos
Desestructurando array
```
const lista=["uno","dos", "tres"];

const [primerElemento] = ["uno","dos", "tres"];
console.log(primerElemento) //#=> "uno"


const [primerElemento, segundoElemento] = ["uno","dos", "tres"];
console.log(segundoElemento) //#=> "dos"

const [,,tercerElemento] = ["uno","dos", "tres"];
console.log(tercerElemento) //#=> "tres"

```
Desestructurando objetos
```
//en vez de 
function App(props){
  return(
    <>
      {props.autorizado? <ComponenteSecreto/>: <ComponenteRegular/>}
    </>
  )
}

//se puede desestructurar
function App({autorizado}){
  return(
    <>
      {autorizado? <ComponenteSecreto/>: <ComponenteRegular/>}
    </>
  )
}
```






```
import React, {useState} from "react";

function Check(){
    const [checked,setChecked] = useState(false);

    return (
        <>
            <input 
                type="checkbox"
                value={checked}
                onChange={()=>setChecked((checked)=>!checked)}
            />
            <p>{checked?'Con pan':'Sin pan'}</p>
        </>
    )
}

export default Check;


```