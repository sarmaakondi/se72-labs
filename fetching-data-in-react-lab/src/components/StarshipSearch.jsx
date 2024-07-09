const StarshipSearch = ({ searchTerm, handleSearch }) => {
    return (
        <form>
            <label htmlFor="searchTerm">Search Term: </label>
            <input
                type="text"
                name="searchTerm"
                id="searchTerm"
                value={searchTerm}
                onChange={handleSearch}
            />
        </form>
    );
};

export default StarshipSearch;
