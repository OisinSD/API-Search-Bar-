import { useState } from "react";
import "../App.css";
import { NewSearchBar } from "../components/NewSearchbar";
import { SearchResults } from "../components/SearchResults";
import "../assets/Banner.webp";

const HomePage = () => {
    const [results, setResults] = useState([]);

    return(
        <div className="App">
            <div className="banner"> 
                <div className="search-bar-container">

                <NewSearchBar setResults={setResults} />
                <SearchResults results={results} />
                </div>
            </div>
        </div>  
    );
};

export default HomePage;