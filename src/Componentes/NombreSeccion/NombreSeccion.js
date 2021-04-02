import React, { Component } from 'react';
import "../../App.css";
import "./NombreSeccion.css"
export default class NombreSeccion extends Component {
    render() {
        return (
            <div id="areaNombreSeccion" className="flexFatherColum">
                <p id="textoNombreSeccion">{this.props.nombreSeccion===null?"Sin definir":this.props.nombreSeccion}</p>
            </div>
        )
    }
}
