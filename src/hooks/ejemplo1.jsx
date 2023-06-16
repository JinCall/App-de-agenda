// Ejemplo de hook useState

//Crear un componente de tipo funcion y acceder a su estadp privado atraves de un hook y poder modificarlo

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre: "Martin",
        email: "1234@email.com"
    }

    // Queremos que valorInicial y personaInicial sean parte del estado del componente para gestionar su cambio y que este se vea en la vista del componente
    // const [nombreVariable, funcioParaCambiar] = useState(valirInicial)

    const [valor, setValor] = useState(valorInicial)

    const [persona, setPersona] = useState(personaInicial)


    // Funcion para actualizar el estado del valor
    const incrementarValor = () => {
        // ? funcionParaCambiar(nuevoValor)
        setValor(valor + 1);
    }

    const actualizarPersona = () => {
        // Funcion para actualziar los valores de persona en el componente
        setPersona(
            {
                nombre: "Juan",
                email: "4321@gmail.com"
            }
        )
    }

    return (
        <div>
            <h1>*** Ejeplo de useState() </h1>
            <h2>Valor: {valor}</h2>
            <h2>Datos:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Botones para actualizar estados */}
            <button onClick={incrementarValor}>Aumentar Valor</button>
            <button onClick={actualizarPersona}>Actualizar Datos</button>
        </div>
    );
}

export default Ejemplo1;
