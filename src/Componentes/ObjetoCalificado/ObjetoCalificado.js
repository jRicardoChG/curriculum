import React, { Component } from 'react'
import "./ObjetoCalificado.css";
import "../../App.css";
import estrellaVacia from "../../imagenes/Estrella_vacia.png";
import estrellallena from "../../imagenes/Estrella_llena.png";
import Punto from '../Punto/Punto';

export default class ObjetoCalificado extends Component {

    state = {
        maximo: 10        
    }

    renderizarEstrellas = function(actual,max){
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

    renderizarPuntos = function(actual,max){
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

    renderizarIdiomas = function(){
        let salida = [];
        if(this.props.dataIn !== undefined)
        {
            for(let i = 0; i<this.props.dataIn.length;i++)
            {
                salida[i]=
                <div id = {"idioma"+i} className = "flexFatherRow esqueleto fillHor padding2px">
                    <div id={"nombreIdioma"+i} className = "flexFatherRow esp65por"> 
                        <p id={"nombreIdiomaText"+i} className = "parrafoCentrado quitarMagins">{this.props.dataIn[i].idioma}</p>
                    </div>
                    <div id={"nivelIdioma"+i} className = "flexFatherRow esp35por">
                        {this.renderizarPuntos(this.props.dataIn[i].nivel, this.state.maximo)}
                    </div>
                </div>
            }
        }
        return salida;
    }



    render() {
        return (
            <div id="objetosCalificados" className = "flexFatherColum fillHor fillVert esqueleto">
                {this.renderizarIdiomas()}
            </div>
        )
    }
}
