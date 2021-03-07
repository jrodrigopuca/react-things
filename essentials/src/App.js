import './App.css';


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
      <ul>
        {props.dishes.map((dish)=> <li key={dish.id}>{dish.title}</li>)}
      </ul>
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
