import React, { Component } from 'react'
import "../../App.css";

/**
 * entradas
 * props:
 *  id
 *  contenido
 * justify
 */
export default class ParrafoGenerico extends Component {

    render() {
        return (
            <div id={"parrafoGenerico"+this.props.id} className = "contenerEspacio espo90por letra08rem">
                <p id={"parrafoGenericoText"+this.props.id} className = {"padding4px quitarMagins contenerEspacio " + this.props.justify}>{this.props.contenido}</p>
            </div>
        )
    }
}
