import React, { Component } from 'react';
import "../../App.css";

export default class Punto extends Component {

    constructor(props){
        super(props)
        /**segun las props defino si va leno o vacio y con que color*/
        if(this.props.lleno!==undefined && this.props.color!==undefined)
            this.props.lleno===true?this.cambiarEstilos(this.props.color):this.cambiarEstilos("black");  
        else
            this.cambiarEstilos("black");
    }

    estilosPunto = {
        backgroundColor:'black',
        height:'10px',
        width:'10px'
    }

    estilosArea = {
        padding: "1px",
        boxSizing:"border-box"
    }


    cambiarEstilos = (color) =>{
        this.estilosPunto.backgroundColor = color;
    }
    
    render() {
        return (
            <div id = {"areaPunto"+this.props.id} style = {this.estilosArea}>
                <div id={"puntoCalificacion"+this.props.id} style={this.estilosPunto}  className="redondo"></div>
            </div>
        )
    }
}
