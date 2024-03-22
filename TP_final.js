document.addEventListener("DOMContentLoaded", () => {
    const pokemonListElement = document.getElementById("pokemon-list");
    const pokemonDetailElement = document.getElementById("pokemon-details");
        function afficherListePokemon() {
        fetch("https://pokeapi.co/api/v2/pokemon/") 
            .then((response) => response.json())
            .then((data) => {
            data.result.forEach((pokemon) => {
                const li = document.createElement("li");
                li.textContent = pokemon.name;
                li.style.cursor = "pointer";
                li.addEventListener("click", () => afficherDetailPokemon(pokemon.url));
                pokemonListElement.appendChild(li);
                });
                })
            .catch((error) => console.error("Erreur lors de la récupération des pokémons :", error));
        }

        function afficherDetailsPokemon(url) {
            fetch(url)
                .then((response) => response.json())
                .then((pokemon) => {
                pokemonDetailsElement.innerHTML = `
                <h2>${pokemon.name}</h2>
                `;
                })
            .catch((error) => console.error("Erreur lors de la récupération des détails des pokémons :", error));
            }
    
    afficherListePokemon();
});