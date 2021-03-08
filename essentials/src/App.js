import './App.css';
import cover from './cover.jpg'
import Emociones from './emociones';
import Selecciones from './Selecciones';
import Check from './check'
import Perfil from './Perfil';


function Header(props){
  const {name}= props;
  return(
    <header>
      <h1>La cocinita de {name}</h1>
    </header>
  );
}

function Main(props){
  return(
    <header>
      <h2>Aqui servimos rica comida</h2>
      <img src={cover} alt="imagen"/>
      <ul>
        {props.dishes.map((dish)=> <li key={dish.id}>{dish.title}</li>)}
      </ul>
      <Emociones />

      <h2>Selecciones</h2>
      <Selecciones />

      <h2>Con pan?</h2>
      <Check />
    </header>
  );
}


const dishes= ["Bife con puré", "Milanesa con ensalada mixta","Chop suey"];
const dishesObject= dishes.map((dish,index)=>({id:index, title:dish}))

function Footer(props){
  const {year}=props;
  return(
    <header>
      <h3>Desde {year}</h3>
      <h3>Esto fue creado por:</h3>
      <Perfil user="jrodrigopuca" />
    </header>
  );
}


function App() {
  return (
    <div className="App">
      <Header name="React"/>
      <Main dishes={dishesObject} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
