// Ejemplo de componente de tipo clase que dispone de los metodes de ciclo de vida
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log("CONSTRUCTOR: Cuando se instancia el componente")
    }

    componentWillMount() {
        console.log("WILLMOUNT: Antes del montaje del componente")
    }

    componentDidMount() {
        console.log("DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizar")
    }

    componentWillReceiveProps() {
        console.log("Si va a recibir nuevas props")
    }

    shouldComponentUpdate() {
        // Sirve para controlar si el componente debe o no actualizarse 
        // return true
    }

    componentWillUpdate() {
        console.log("WILLUPDATE: Justo antes de actualizarse")
    }

    componentDidUpdate() {
        console.log("Justo despues de actualizarse")
    }

    componentWillUnmount() {
        console.log("WILLUNMOUNT: Justo antes de desaparecer")
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
