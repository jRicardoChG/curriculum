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
      <div>
      <hashRouter basename={process.env.PUBLIC_URL}>
        <div id="appPrincipal" className="flexFatherRow total margenes">
            <AreaFoto dataIn={datos}></AreaFoto>
            <AreaDetalles></AreaDetalles>
        </div>
      </hashRouter>
      </div>
    );
  }
}
