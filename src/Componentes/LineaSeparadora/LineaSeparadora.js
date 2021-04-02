import React, { Component } from 'react';
import "./LineaSeparadora.css";
import "../../App.css";

export default class LineaSeparadora extends Component {
    render() {
        return (
            <div id="areaLineaSeparadora" className = "espacio">
                <div id="linealarga"></div>
                <div id="lineaGorda"></div>
            </div>
        )
    }
}
