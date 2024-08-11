const searchInput = document.getElementById("search");
const name = document.getElementById("name");
const type = document.getElementById("type");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const bio = document.getElementById("bio");
const pokemonImage = document.createElement('img');


searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const pokemonName = searchInput.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        name.innerText = data.name;
        type.innerText = data.types.map((type) => type.type.name).join(", ");
        height.innerText = data.height;
        weight.innerText = data.weight;

        // Fetch Pokémon species data for flavor text
        fetch(data.species.url)
          .then((response) => response.json())
          .then((speciesData) => {
            const flavorTextEntry = speciesData.flavor_text_entries.find(
              (entry) => entry.language.name === "en"
            );
            bio.innerText = flavorTextEntry ? flavorTextEntry.flavor_text : "-";
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        name.innerText = "Not found";
        type.innerText = "-";
        height.innerText = "-";
        weight.innerText = "-";
        bio.innerText = "-";
      });
  }
});
