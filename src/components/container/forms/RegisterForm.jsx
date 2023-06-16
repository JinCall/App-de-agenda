import React, { useState } from 'react'

import { User } from '../../models/user.class';

export default function RegisterForm() {

    const initialData = [
        {
            user: "",
            name: "",
            email: "",
            password: ""
        }
    ]

    const [data, setData] = useState(initialData);

    return (
        <div>
        
        </div>
)}
