import React, { Component } from 'react'
import "./ObjetoCalificado.css";
import "../../App.css";
import estrellaVacia from "../../imagenes/Estrella_vacia.png";
import estrellallena from "../../imagenes/Estrella_llena.png";
import iconoDama from "../../imagenes/iconoDama.png";
import LinkedIn from "../../imagenes/LinkedInLogo.png";
import torre from "../../imagenes/torre.png";
import noEncontrada from "../../imagenes/imagennoencontrada.png";
import iconoCaballero from "../../imagenes/iconoCaballero.png";
import Punto from '../Punto/Punto';
import ParrafoGenerico from "../ParrafoGenerico/ParrafoGenerico";
import ObjetoValorDescripcion from '../ObjetoValorDescripcion/ObjetoValorDescripcion';

/**
 * Clase para renderiza objetos unos al frente de otros con un porcentaje de espacio definido
 * Entradas:
 * - tipoSalida
 * 
 * tipo salidas: iconoValor
 * tipoElemento : iconoValor, idiomas, valorValor
 * dataIn: lista de datos
 * 
 * entradas : 
 * id = para elobjeto general
 */
export default class ObjetoCalificado extends Component {

    constructor(props)
    {
        super(props)
    this.clickEnlace = this.clickEnlace.bind(this)

        if(this.props.tipoElemento==="idiomas")
            this.renderizar.renderizar = this.renderizarIdiomas;
        else if(this.props.tipoElemento==="iconoValor")
            this.renderizar.renderizar = this.renderizarIconoValor;
        else if(this.props.tipoElemento==="referencias")
            this.renderizar.renderizar = this.renderizarReferencias;
        else if(this.props.tipoElemento==="enlaces")
            this.renderizar.renderizar = this.renderizarEnlaces;
    }

    state = {
        maximo: 10        
    }

    renderizar = {
        renderizar : this.renderizarIdiomas
    }




    renderizarEstrellas = function rdrEstrellas(actual,max){
        let salida = [];
        for(let i=0;i<max;i++)
        {
            if(i<actual)
                salida[i] = <img id = {"estrella"+i} src = {estrellallena} alt="estrellanivel" className = "estrellas"></img>
            else
                salida[i] = <img id = {"estrella"+i} src = {estrellaVacia} alt="estrellanivel"  className = "estrellas"></img>
        }
        return salida;
    }

    renderizarPuntos = (actual,max) =>{
        let salida = [];
        for(let i=0;i<max;i++)
        {
            if(i<actual)
                salida[i] = <Punto id={i} lleno={true} color={"rgb(25, 124, 170)"}></Punto>
            else
                salida[i] = <Punto id={i} lleno={false} color={"rgb(25, 124, 170)"}></Punto>
        }
        return salida;

    }

    /**
     * Funcion que renderiza idiomas
     * @returns 
     */
    renderizarIdiomas = () =>{
        console.log("entre a idiomas")
        let salida = [];
        if(this.props.dataIn !== undefined)
        {
            for(let i = 0; i<this.props.dataIn.length;i++)
            {
                salida[i]=
                <div id = {"idioma"+i} className = "flexFatherRowOCL esqueleto fillHor padding6px letra08rem">
                    <div id={"nombreIdioma"+i} className = "flexFatherRow esp65porOCL"> 
                        <p id={"nombreIdiomaText"+i} className = "textoJustificado quitarMagins">{this.props.dataIn[i].idioma}</p>
                    </div>
                    <div id={"nivelIdioma"+i} className = "flexFatherRow esp35porOCL">
                        {this.renderizarPuntos(this.props.dataIn[i].nivel, this.state.maximo)}
                    </div>
                </div>
            }
        }
        return salida;
    }

    /**
     * Funcion que renderiza un objeto icono y un valor de texto
     */
    renderizarIconoValor = () =>{
        let salida = [];
        if(this.props.dataIn !== undefined)
        {
            for(let i = 0; i<this.props.dataIn.length;i++)
            {
                salida[i]=
                <div id = {"iconoValor"+i} className = "flexFatherRowOCL esqueleto fillHor padding2px letra08rem">
                    <div id={"iconoValor"+i} className = "flexFatherRow esp35porOCL"> 
                        <img src = {this.props.dataIn[i].icono==undefined?iconoDama:this.props.dataIn[i].icono} alt="iconoReferencia" className="iconoTamano50px"></img>
                    </div>
                    <div id={"valorDesc"+i} className = "flexFatherRow esp65porOCL letra08rem">
                        <ParrafoGenerico id = {"nomRef"+i} contenido = {this.props.dataIn[i].nombre}></ParrafoGenerico>
                    </div>
                </div>
            }
        }
        return salida;
    }

    /**
     * 
     * @returns renderizar referencias
     */
    renderizarReferencias = () =>{
        let salida = [];
        if(this.props.dataIn !== undefined)
        {
            for(let i = 0; i<this.props.dataIn.length;i++)
            {
                salida[i]=
                <div id = {"refValor"+i} className = "flexFatherColum esqueleto fillHor padding4px letra08rem">
                    <div className = "fillHor quitarMagins flexFatherRowOCL">
                        <div id={"refValor"+i} className = "esp35porOCL flexFatherRowOCL"> 
                            <img src = {this.props.dataIn[i].icono==undefined?(this.props.dataIn[i].genero==="femenino"?iconoDama:iconoCaballero):this.props.dataIn[i].icono} alt="iconoReferencia" className="iconoTamano50px"></img>
                        </div>
                        <div id={"refValor"+i} className = "esp65porOCL letra12rem textoJustificado letra08rem">
                            <ParrafoGenerico id = {"nomRef"+i} justify = "textoJustificado" contenido = {this.props.dataIn[i].nombre}></ParrafoGenerico>
                        </div>
                    </div>
                    <div className = "fillHor quitarMagins flexFatherColum letra08rem">
                        <ObjetoValorDescripcion id="telefonos" valor="Telefono" justificacion = "textoJustificado" descripcion={this.props.dataIn[i].telefono}></ObjetoValorDescripcion>
                        <ObjetoValorDescripcion id="empresa" valor="Empresa" justificacion = "textoJustificado" descripcion={this.props.dataIn[i].empresa}></ObjetoValorDescripcion>
                        <ObjetoValorDescripcion id="cargo" valor="Cargo" justificacion = "textoJustificado" descripcion={this.props.dataIn[i].cargo}></ObjetoValorDescripcion>
                    </div>
                </div>
            }
        }
        return salida;
    }

    /**
     * Funcion para renderizar enlaces
     */
     renderizarEnlaces = () =>{
        let salida = [];
        if(this.props.dataIn !== undefined)
        {
            for(let i = 0; i<this.props.dataIn.length;i++)
            {
                salida[i]=
                <div id = {"enlaces"+i} className = "flexFatherRowOCL esqueleto fillHor padding2px letra08rem cambiarColor" onClick={(e) => {this.clickEnlace(e,i)}}>
                    <div id={"enlaces"+i} className = "flexFatherRow esp35porOCL"> 
                        <img src = {this.props.dataIn[i].icono==undefined?noEncontrada:this.analizarIconoEnlace(this.props.dataIn[i].icono)} alt="iconoReferencia" className="iconoTamano50px"></img>
                    </div>
                    <div id={"enlaces"+i} className = "flexFatherRow esp65porOCL letra08rem">
                        <a href={this.props.dataIn[i].enlace}>{this.props.dataIn[i].palabraEnlace}</a>
                    </div>
                </div>
            }
        }
        return salida;
    }


    /**
     * metodo par aanalizar los iconos de los enlaces aredes sociales
     */
    analizarIconoEnlace = (nombreIcono)=>{
        if(nombreIcono==="LinkedIn")
            return LinkedIn;
        else if(nombreIcono==="torre")
            return torre;
        else
            return noEncontrada;    
    }

    clickEnlace = function click(e,i){
        /**me lleva al link del enlace*/
        e.preventDefault();
        window.location.href = this.props.dataIn[i].enlace;
    }

    render() {
        return (
            <div id={"objetosCalificados" + this.props.id} className = "flexFatherColum fillHor fillVert esqueleto" >
                {this.renderizar.renderizar()}
            </div>
        )
    }
}
