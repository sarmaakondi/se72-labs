import ItemCard from "./ItemCard";

const ItemList = ({ starWarsData, fields }) => {
    return (
        <div className="list">
            <h2>Starships</h2>
            <h3>Number of results: {starWarsData.length}</h3>
            <ul>
                {starWarsData.map((data) => (
                    <ItemCard key={data.name} fields={fields} data={data} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
