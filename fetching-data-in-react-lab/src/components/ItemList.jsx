import ItemCard from "./ItemCard";

const ItemList = ({ starships }) => {
    return (
        <div className="list">
            <h2>Starships</h2>
            <h3>Number of results: {starships.length}</h3>
            <ul>
                {starships.map((starship) => (
                    <ItemCard
                        key={starship.name}
                        name={starship.name}
                        starship_class={starship.starship_class}
                        manufacturer={starship.manufacturer}
                        model={starship.model}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
