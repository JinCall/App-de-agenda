import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation()
    const history = useNavigate()

    const navigate = (path) => {
        history(path)
    }

    const goBack = () => {
        history(-1)
    }

    const goForward = () => {
        history(+1)
    }

    return (
        <div>
            <h1>
                About | Faqs
            </h1>
            <div>
                <button onClick={() => navigate("/")}>
                    Go Home
                </button>
                <button onClick={goBack}>
                    Go back
                </button>
                <button onClick={goForward}>
                    Go forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
