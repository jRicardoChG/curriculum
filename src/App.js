<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import React, { Component } from 'react';
import './App.css';
import AreaDetalles from "./Componentes/AreaDetalles/AreaDetalles.js";
import AreaFoto from "./Componentes/AreaFoto/AreaFoto.js";
import { datos } from "./datosHojadeVida.json";

export default class App extends Component {

  // constructor(props){
  //   super(props)
  // }

  verDatos = function (){
    console.log(datos);
  } 

  render(){
    return (
      <div id="appPrincipal" className="flexFatherRow total margenes">
          <AreaFoto dataIn={datos}></AreaFoto>
          <AreaDetalles></AreaDetalles>
      </div>
    );
  }
}
>>>>>>> 165ca5fb2dbd0b51c22f7947eb1da44fd29c86c7
