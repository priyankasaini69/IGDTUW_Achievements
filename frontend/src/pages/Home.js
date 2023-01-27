import * as React from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
    const handleClick = () => navigate('/achievements');

    return (
        <div className='hero-container'>
            <h1> The World's gonna know your Name</h1>

            <div className='hero-btns'>
                <button type="button" onClick={handleClick}>
                    Click to Enter
                </button>
            </div>
        </div>
    );
}

export default Home;
