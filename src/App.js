import logo from './logo.svg';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a Person</p>
        <Person name="Abidur Rahman"></Person>
        <Person name="Hossain Rahman"></Person>
        <Person name ="Halima"> </Person>
      </header>
    </div>
  );
}
function Person(props) {
  return (
      <div style={{border: '2px solid red', margin:'2px'}}>
      <h1>Name:{ props.name}</h1>
        <h3>Have a nice day</h3>
      </div>
  );
}

export default App;
