import { useState } from "react";
import "./App.css";
import { NewSearchBar } from "./components/NewSearchbar";
import { SearchResults } from "./components/SearchResults";

function App() {
    const [results, setResults] = useState([]);

    return (
        <div className="App">
            <div className="search-bar-container">
                <NewSearchBar setResults={setResults} />
                <SearchResults results={results} />
            </div>
        </div>
    );
}

export default App;