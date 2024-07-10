const ItemCard = ({ name, starship_class, manufacturer, model }) => {
    return (
        <div className="card">
            <li className="name">{name}</li>
            <li>Class: {starship_class}</li>
            <li>Manufacturer: {manufacturer}</li>
            <li>Model: {model}</li>
        </div>
    );
};

export default ItemCard;
