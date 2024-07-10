const ItemCard = ({ fields, data }) => {
    const filteredData = Object.fromEntries(
        fields.map((field) => [field, data[field]])
    );

    return (
        <div className="card">
            {Object.keys(filteredData).map((key) => (
                <li key={key}>
                    <span className="field-title">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </span>
                    {data[key]}
                </li>
            ))}
        </div>
    );
};

export default ItemCard;
