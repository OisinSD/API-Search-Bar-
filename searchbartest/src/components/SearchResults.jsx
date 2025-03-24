import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const SearchResults = ({ results, input, value }) => {
    const navigate = useNavigate();

    let MyClass = "";
    if(results.length > 0){
        MyClass = "results-list";
    } else{
        MyClass = "NOresults-list";
    }

   const shortenText = (text, maxLen) => {
    if(text.length <= maxLen){
        return text;
    }
    return text.slice(0, maxLen) + "...";
   }

   const gamePage = () => {
    navigate("/game-page");
   };
   

    return (
        <div className={MyClass}>
            {results.map((result, id) => {
            return(
                 <div key={id} className="game-card">
                    {result.background_image && ( 
                        <img 
                        src={result.background_image}
                        alt={results.name}
                        className="game-image"
                        />
                    )}
                    <h3 onClick={gamePage} className="game-info">{shortenText(result.name, 25)}</h3>
                    {/* <h3 className="game-info">{result.rating}/5</h3> */}
                </div>
            );
        })}
        </div>
    );
};


