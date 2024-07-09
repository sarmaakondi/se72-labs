const BASE_URL = "https://swapi.dev/api/starships";

const index = async () => {
    try {
        const response = await fetch(BASE_URL, {
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
