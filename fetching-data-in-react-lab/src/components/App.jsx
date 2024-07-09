import { useState, useEffect } from "react";

import * as starshipService from "../services/starshipService";
import StarshipSearch from "./StarshipSearch";
import StarshipList from "./StarshipList";

import "./App.css";

function App() {
    const [starships, setStarships] = useState([]);

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
            <StarshipSearch />
            <StarshipList starships={starships} />
        </main>
    );
}

export default App;
