import { useState, useEffect } from "react";

import "./App.css";
import ItemSearch from "./ItemSearch";
import ItemList from "./ItemList";
import * as starWarsDataService from "../services/starWarsDataService";

const dataMapping = {
    starships: ["name", "starship_class", "manufacturer", "model"],
};

function App() {
    const [starWarsData, setStarWarsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("starships");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchedData = starWarsData.filter((data) =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await starWarsDataService.index(
                    category.toLowerCase()
                );
                if (data.error) throw new Error(data.error);
                setStarWarsData(data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [category]);

    return (
        <main>
            <div className="header">
                <h1>Star Wars API</h1>
                <button
                    onClick={(event) => setCategory(event.target.innerText)}>
                    Starships
                </button>
            </div>
            <ItemSearch searchTerm={searchTerm} handleSearch={handleSearch} />
            <ItemList
                starWarsData={searchedData}
                fields={dataMapping[category.toLowerCase()]}
            />
        </main>
    );
}

export default App;
