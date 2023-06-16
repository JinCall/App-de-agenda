// Componente que va a contener un un formulario para aunteticacion de usaurio

import React, { useState } from 'react';

const LogInForm = () => {

    const initialCredentials = [
        {
            user: "",
            password: ""
        }
    ]

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LogInForm;
