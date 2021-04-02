import React, { Component } from 'react';
import "../../App.css";
import ObjetoCalificado from '../ObjetoCalificado/ObjetoCalificado';
import "./AreaFoto.css";
import fotoDefecto from "../../imagenes/imagennoencontrada.png";
import LineaSeparadora from "../LineaSeparadora/LineaSeparadora";
import NombreSeccion from '../NombreSeccion/NombreSeccion';
import {  } from "module";
import ParrafoGenerico from '../ParrafoGenerico/ParrafoGenerico';
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

            this.state.foto = foto===null?fotoDefecto:foto;
            this.state.idiomas = idiomas;
            this.state.perfilProfesional = perfilProfesional;
            this.state.linksExternos = linksExternos;
            this.state.referencias = referencias;

        }
    }

    render() {
        return (
            <div id="lateralIzquierdo" className= " esqueleto flexFatherColum areaFoto">
                <div id="internoFoto" className=" esqueleto internoFoto">
                    <div id = "borde1">
                        <div id="divImagen" className= "divImagen">
                            <img src={this.state.foto} className="fotoPerfil" alt="imagen"></img>
                        </div>
                    </div>
                </div>                
                <NombreSeccion nombreSeccion="Mi Perfil"></NombreSeccion>
                <LineaSeparadora></LineaSeparadora>
                <ParrafoGenerico id="perfilPrincipal" contenido = {this.props.dataIn.areaFoto.perfilProfesional} justify = "textoJustificado"></ParrafoGenerico>
                <NombreSeccion nombreSeccion="Idiomas"></NombreSeccion>
                <LineaSeparadora></LineaSeparadora>
                <div id="seccion1" className = "seccion1 contenerEspacio">
                    <ObjetoCalificado dataIn = {this.state.idiomas}></ObjetoCalificado>
                </div>
                <NombreSeccion nombreSeccion="Referencias"></NombreSeccion>
                <LineaSeparadora></LineaSeparadora>
                <ParrafoGenerico id="referencias" contenido = {this.props.dataIn.areaFoto.perfilProfesional} justify = "textoJustificado"></ParrafoGenerico>
                <NombreSeccion nombreSeccion="Enlaces Redes Sociales"></NombreSeccion>
                <LineaSeparadora></LineaSeparadora>
            </div>
        )
    }
}
