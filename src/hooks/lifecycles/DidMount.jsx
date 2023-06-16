// Ejemplo de uso de ciclo de vida del metodo y el hook de ciclo de vida

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log("Comportamiento antes de que el componente sea añidido al DOM (renderice)")
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {
    console.log("Comportamiento antes de que el componente sea añidido al DOM (renderice)")

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añidido al DOM (renderice)")
    }, []);

    return (
        <div>
            <div>
                <h1>DidMount</h1>
            </div>
        </div>
    );
}