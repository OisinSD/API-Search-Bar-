import { React } from "react";
import "../assets/api";
import "../App.css";
import { useNavigate } from "react-router-dom";

const GamePage = () => {
    const navigate = useNavigate();

    const homeButton = () => {
        navigate("/");
    }

    return(
        <div className="App">
            <div className="search-bar-container">
            <h1>This is the Game Page</h1>
            <button className="homeButton" onClick={homeButton}>HomePage</button>
            </div>
        </div>
    );
};

export default GamePage;