import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.90' },
    { name: 'Pdf Reader', price: '$50' },
  ]; 
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a Person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Abidur Rahman"></Person>
        <Person name="Hossain Rahman"></Person>
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '400px',
    width: '400px',
    float: 'left',
  };
  console.log(props);
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5> Price:{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}
function Person(props) {
  return (
    <div style={{ border: '2px solid red', margin: '2px' }}>
      <h1>Name:{props.name}</h1>
      <h3>Have a nice day</h3>
    </div>
  );
}

export default App;
