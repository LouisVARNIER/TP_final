document.addEventListener("DOMContentLoaded", () => {
    const pokemonListElement = document.getElementById("pokemon-list");
    const pokemonDetailsElement = document.getElementById("pokemon-details");
        function afficherListePokemon() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=40") 
            .then((response) => response.json())
            .then((data) => {
            data.results.forEach((pokemon) => {
                const li = document.createElement("li");
                li.textContent = pokemon.name;
                li.style.cursor = "pointer";
                li.addEventListener("click", () => afficherDetailsPokemon(pokemon.url));
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
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p><strong>Statistiques du pokémon </strong></p>
                <p> HP : ${pokemon.stats[0].base_stat} 
                |   Attack: ${pokemon.stats[1].base_stat} 
                | Defense: ${pokemon.stats[2].base_stat} 
                | SP Attack: ${pokemon.stats[3].base_stat} 
                | SP Defense: ${pokemon.stats[4].base_stat}  
                | Speed: ${pokemon.stats[5].base_stat}</p>
                `;
                })
            .catch((error) => console.error("Erreur lors de la récupération des détails des pokémons :", error));
            }
    
    afficherListePokemon();
});