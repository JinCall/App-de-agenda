// Ejemplo de useState(), useContext()

import React, { useState, useContext } from 'react';

// Componente 1 disponde un contexto que va a tener un valor que recibe desde el padre

// Inicializamos un estado que recibira datos del padre
const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pitamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                la sesion es: {state.session}
            </h1>
        </div>
    );
}

const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: "12345",
        session: 1
    }

    // Creamos el esado de este componente

    const [sessionData, setSessionData] = useState(estadoInicial);

    const actualizarSesion = () => {
        setSessionData(
            {
                token: "JK345I",
                session: sessionData.session + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esta aqui adentro puede leer los datos de sessionData, ademas si se actuliza tambien los componente de aqui se acutalizan */}
            <h1>Ejemplo de useState() y useContext()</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;


