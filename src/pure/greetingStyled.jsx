import React, { useState } from 'react';

// Definiendo estilos en constantes
const loggedStyle = {
    color: "cyan"
}

// ? estilo para usuario no logueado
const unlogged = {
    color: "tomato",
    fontWeight: "bold"
}

const GreetingStyled = (props) => {
    // Generamos un estado para el componente
    const [logged, setLogged] = useState(false);

    const greetUser = () => (<p> Hola {props.name} </p> )
    const pleaseLogin = () => (<p> Please login </p>)

    return (
        <div style={ logged ? loggedStyle : unlogged}>
            { logged ? 
                greetUser()
                : 
                pleaseLogin()
            } 
            <button onClick={() => {
                console.log("Click")
                setLogged(!logged)
            }}>
                { logged ? "Logout" : "Login" }
            </button>
        </div>
    );
}

export default GreetingStyled;
