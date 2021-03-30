import React, { Component } from 'react';
import "../../App.css";
import ObjetoCalificado from '../ObjetoCalificado/ObjetoCalificado';
import "./AreaFoto.css";
export default class AreaFoto extends Component {

    state = {
        foto : "imagennoencontrada.png",
        perfilProfesional: "",
        idiomas:[],
        linksExternos:[],
        referencias:[]
    }

    setDataIn(){
        this.dataIn = this.props.dataIn;
    }

    constructor(props){
        super(props)
        
        console.log(this.props.dataIn.areaFoto.foto);
        if(this.props.dataIn.areaFoto !== undefined)
        {
            /**destructuring props*/
            const {
                foto,idiomas,perfilProfesional,linksExternos,referencias
            } = this.props.dataIn.areaFoto;

            this.state.foto = foto===null?"imagennoencontrada.png":foto;
            this.state.idiomas = idiomas;
            this.state.perfilProfesional = perfilProfesional;
            this.state.linksExternos = linksExternos;
            this.state.referencias = referencias;

        }
    }

    render() {
        return (
            <div id="lateralIzquierdo" className= "esqueleto flexFatherColum areaFoto">
                <img src={this.state.foto} className="fotoPerfil" alt="imagen"></img>
                <ObjetoCalificado dataIn = {this.state.idiomas}></ObjetoCalificado>
            </div>
        )
    }
}
