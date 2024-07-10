import { useState, useEffect } from "react";

import "./App.css";
import ItemSearch from "./ItemSearch";
import ItemList from "./ItemList";
import * as starWarsDataService from "../services/starWarsDataService";

const categoryList = [
    "Films",
    "People",
    "Planets",
    "Species",
    "Starships",
    "Vehicles",
];

const dataMapping = {
    films: ["title", "release_date", "director", "producer"],
    people: ["name", "gender", "eye_color", "birth_year"],
    planets: ["name", "population", "diameter", "gravity"],
    species: ["name", "classification", "designation", "average_lifespan"],
    starships: ["name", "starship_class", "manufacturer", "model"],
    vehicles: ["name", "vehicle_class", "manufacturer", "model"],
};

function App() {
    const [starWarsData, setStarWarsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("starships");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchedData = searchTerm
        ? starWarsData.filter((data) =>
              data.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : starWarsData;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data = await starWarsDataService.index(
                    category.toLowerCase()
                );
                if (data.error) throw new Error(data.error);
                setStarWarsData(data.results);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [category]);

    return (
        <main>
            <div className="header">
                <h1>Star Wars API</h1>
                {categoryList.map((item) => (
                    <button
                        key={item}
                        onClick={(event) =>
                            setCategory(event.target.innerText)
                        }>
                        {item}
                    </button>
                ))}
            </div>
            <ItemSearch searchTerm={searchTerm} handleSearch={handleSearch} />
            <ItemList
                category={category}
                isLoading={isLoading}
                starWarsData={searchedData}
                fields={dataMapping[category.toLowerCase()]}
            />
        </main>
    );
}

export default App;
