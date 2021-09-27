import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
        <Counter></Counter>
        <User></User>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */} 
        <Person name="Abidur Rahman"></Person>
        <Person name="Hossain Rahman"></Person>
      </header>
    </div>
  );
}
function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);  
  return (
    <div>
      <h3>Dynamic User: {user.map(users => <li>{ users.name}</li>)}</h3>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    if (count > 0) {
      const newCount = count - 1;
    setCount(newCount);
   }
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
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
