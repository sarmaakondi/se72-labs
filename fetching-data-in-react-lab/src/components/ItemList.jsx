import ItemCard from "./ItemCard";

const ItemList = ({ category, isLoading, starWarsData, fields }) => {
    return (
        <div className="list">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    <h2>{category[0].toUpperCase() + category.slice(1)}</h2>
                    <h3>Number of results: {starWarsData.length}</h3>
                    <ul>
                        {starWarsData.map((data) => (
                            <ItemCard
                                key={data.name}
                                fields={fields}
                                data={data}
                            />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default ItemList;
