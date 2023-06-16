import React, { useState } from 'react';

// Login -- Logout buttons
const LoginBtn = ({ loginAction, propStyle }) => {
    return <button style={propStyle} onClick={loginAction}>Login</button>
}

const LogoutBtn = ({ logoutAction,propStyle }) => {
    return <button style={propStyle} onClick={logoutAction}>Logout</button>
}

// ? true (expresion true) && expresion ---> se renderiza la expresion
// ? false (expresion false) && expresion ---> no se renderiza la expresion

let red = Math.random() * 255;
let green = Math.random() * 255;
let blue = Math.random() * 255;

const logged = {
    color: "white",
    backgroundColor: `rgb(${red},${green},${blue})`,
    fontWeight: "bold"
}

const unlogged = {
    color: "white",
    backgroundColor: "tomato",
    fontWeight: "bold"
}

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access)
    // }

    const loginAction = () => {
        setAccess(!false)
    }

    const logoutAction = () => {
        setAccess(!true)
    }

    let OptionalBtn;

    // if(access) {
    //     OptionalBtn = <button onClick={updateAccess}>Logout</button>
    // } else {
    //     OptionalBtn = <button onClick={updateAccess}>Logout</button>
    // }

    
    if(access) {
        OptionalBtn = <LogoutBtn propStyle={unlogged} logoutAction={logoutAction}>Logout</LogoutBtn>
    } else {
        OptionalBtn = <LoginBtn propStyle={logged} loginAction={loginAction}>Login</LoginBtn>
    }

    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/* Optional btn */}
            { OptionalBtn }
            {/* Unread Messages */}
            {/* { nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message</p> }
            { nMessages > 1 && <p>You have {nMessages} new messages</p> }
            { nMessages === 0 && <p>You have no new messages</p> } */}
            {/* Operador ternario */}
            { access ? (
                <div>
                    { nMessages > 0 ? 
                        <p>You have { nMessages } new message{ nMessages > 1 ? "s" : null }</p> 
                        : 
                        <p>You have no new messages</p> 
                    }
                    <button onClick={addMessages}>{nMessages === 0 ? 
                    "Add a first message" : "Add a new message" }</button>
                </div>) 
                : 
                null
            }
        </div>
    );
}

export default OptionalRender;
