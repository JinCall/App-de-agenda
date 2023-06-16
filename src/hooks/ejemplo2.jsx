// Ejemplo del uso de useState(), useRef() y useEffect()

import React, { useState, useEffect, useRef } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asociar una variable con un elemento del ODM del componente (vista HTML)

    const miRef = useRef()

    const incrementar1 = () => {
        setContador1(contador1 + 1)
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1)
    }

    // Trabajando con useEffect

    // ? Caso 1: ejecutar siempre un snippet de codigo
    // Cada vez que haya un cambio en el estado del componente se ejecuta aquello que sete adentro del useEffect()

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE")
    //     console.log("Mostrando erferencia a elemento del DOM")
    //     console.log(miRef)
    // })

    // ? Caso 2: Ejecutar solo cuando cambie el contador1 o contador 2
    // Cada vez que haya un cambio en contador1, se ejecuta el useEffect(), en caso ed que cambie contador2 no pasara nada

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE")
    //     console.log("Mostrando erferencia a elemento del DOM")
    //     console.log(miRef)
    // }, [contador1]);

        // ? Caso 3: Ejecutar solo cuando cambie el contador1 o contador 2
    // Cada vez que haya un cambio en contador1 y contador2, se ejecuta el useEffect()

    useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL COMPONENTE")
        console.log("Mostrando erferencia a elemento del DOM")
        console.log(miRef)
    }, [contador1, contador2]);

    return (
        <div>
            <h1>Ejemplo del uso de useState(), useRef() y useEffect()</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>
            </div>

        </div>
    );
}

export default Ejemplo2;
