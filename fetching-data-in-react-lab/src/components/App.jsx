import { useState, useEffect } from "react";

import * as starshipService from "../services/starshipService";
import StarshipSearch from "./StarshipSearch";
import StarshipList from "./StarshipList";

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
            <StarshipSearch
                searchTerm={searchTerm}
                handleSearch={handleSearch}
            />
            <StarshipList starships={searchedData} />
        </main>
    );
}

export default App;
