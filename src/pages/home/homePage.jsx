import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation()
    const history = useNavigate()

    const navigate = (path) => {
        history(path)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>
            <button onClick={() => navigate("/profile") }>
                Go to profile
            </button>
        </div>
    );
}

export default HomePage;
