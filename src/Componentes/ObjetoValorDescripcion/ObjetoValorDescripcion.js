import React, { Component } from 'react';
import "./ObjetoValorDescripcion.css";

/**
 * elemento basico que organiza la infromacion en una fila de vlaor y descripcion
 * entradas: id, valor, descripcion, distribucion, justificacion
 * 
 */
export default class ObjetoValorDescripcion extends Component {
  render() {
    return (
        <div id={"valorDescArea"+this.props.id} className="fillHor quitarMagins flexFatherRowOVD">
            <div id={"valorArea"+this.props.id} className="esp35porOVD quitarMagins padding2px negrita">
                <p id={"valorText"+this.props.id} className={"fillHor quitarMagins " + this.props.justificacion}>{this.props.valor}</p>
            </div>
            <div id={"valorDesc"+this.props.id} className="esp65porOVD quitarMagins padding2px">
                <p id={"descText"+this.props.id} className={"fillHor quitarMagins " + this.props.justificacion}>{this.props.descripcion}</p>
            </div>
        </div>
    );
  }
}
