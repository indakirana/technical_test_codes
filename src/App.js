import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);

const App = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    const number = event.target.value;

      string ="";
      for (let i = 1; i<=number; i++) {
        for (let j = 1; j<=i; j++) {
          string += j;
        }
        string += "\n";
    
    }
    console.log(string);
  };

  const handleClick = event => {
    event.preventDefault();

    console.log('handleClick', message);
  };

  return (
    <div className="App">
      <h2>Input Angka</h2>
      <form>
        <input id="angka" placeholder="input angka" onChange={handleChange} value={message}></input>
        <br></br>
        <button onClick={handleClick}>Generate Segitiga</button>
        <button>Generate Bilangan Ganjil</button>
        <button>Generate Bilangan Prima</button>
      </form>
      <h2>Result:</h2>
      <div>
        {message}
      </div>
    </div>
  );
}

export default App;