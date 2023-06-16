// Ejemplo de uso del metodo componentWillUnmount para el componente funcional (Cunado va a desaparecer)

import React, { Component,useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log("Comportamiento antes de que el componente vaya a desaparecer")
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnMount
                </h1>
            </div>
        );
    }
}

const WillUnMountHook = () => {

    useEffect(() => {
        // Aqui no ponemos
        return () => {
            console.log("Comportamiento antes de que el componente vaya a desaparecer")
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}
