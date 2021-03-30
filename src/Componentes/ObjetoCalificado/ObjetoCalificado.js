import React, { Component } from 'react'
import "./ObjetoCalificado.css";
import "../../App.css";

export default class ObjetoCalificado extends Component {

constructor(props){
    super(props)
    console.log(this.props.dataIn)
}

    state = {
        maximo: 5        
    }
    
    renderizarEstrellas = function(actual,max){
        let salida = [];
        for(let i=0;i<max;i++)
        {
            if(i<actual)
                salida[i] = <img id = {"estrella"+i} src = "Estrella_llena.png" alt="estrellanivel" className = "estrellas"></img>
            else
                salida[i] = <img id = {"estrella"+i} src = "Estrella_vacia.png" alt="estrellanivel"  className = "estrellas"></img>
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
                <div id = {"idioma"+i} className = "flexFatherRow esqueleto fillHor">
                    <div id={"nombreIdioma"+i} className = "flexFatherRow"> 
                        <p>{this.props.dataIn[i].idioma}</p>
                    </div>
                    <div id={"nivelIdioma"+i} className = "flexFatherRow">
                        {this.renderizarEstrellas(this.props.dataIn[i].nivel, this.state.maximo)}
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
