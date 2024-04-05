document.addEventListener("DOMContentLoaded", () => {
    const pokemonListElement = document.getElementById("pokemon-list");
    const pokemonDetailsElement = document.getElementById("pokemon-details");
        function afficherListePokemon() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1400") 
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
                <p><strong>ID du pokémon : </strong> ${pokemon.id}</p> </br>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p><strong>Type du pokémon : </strong> ${pokemon.types[0].type.name} </p>
                <p><strong>Statistiques du pokémon : </strong></p>
                <p> HP : ${pokemon.stats[0].base_stat} </br>
                Attack: ${pokemon.stats[1].base_stat} </br>
                Defense: ${pokemon.stats[2].base_stat} </br>
                SP Attack: ${pokemon.stats[3].base_stat} </br>
                SP Defense: ${pokemon.stats[4].base_stat} </br>
                Speed: ${pokemon.stats[5].base_stat} </br> </p>
                `;
                })
            .catch((error) => console.error("Erreur lors de la récupération des détails des pokémons :", error));
            }
    
    afficherListePokemon();
});