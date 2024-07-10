import { useState, useEffect } from "react";

import ItemSearch from "./ItemSearch";
import ItemList from "./ItemList";
import * as starshipService from "../services/starshipService";

import "./App.css";

function App() {
    const [starships, setStarships] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchedData = starships.filter((starship) =>
        starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await starshipService.index();
                if (data.error) throw new Error(data.error);
                setStarships(data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <main>
            <h1>Star Wars API</h1>
            <ItemSearch searchTerm={searchTerm} handleSearch={handleSearch} />
            <ItemList starships={searchedData} />
        </main>
    );
}

export default App;
