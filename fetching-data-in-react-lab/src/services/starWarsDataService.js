const BASE_URL = "https://swapi.dev/api/";

const index = async (category) => {
    try {
        const response = await fetch(`${BASE_URL}/${category}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

export { index };
