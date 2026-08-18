import ItemCard from "./ItemCard";

function ItemList({ pokemones, favoritos, agregarFavorito, quitarFavorito }) {
  return (
    <section className="pokemon-list">
      {pokemones.map((pokemon) => {
        const esFavorito = favoritos.some((fav) => fav.id === pokemon.id);
        return (
          <ItemCard
            key={pokemon.id}
            pokemon={pokemon}
            esFavorito={esFavorito}
            agregarFavorito={agregarFavorito}
            quitarFavorito={quitarFavorito}
          />
        );
      })}
    </section>
  );
}

export default ItemList;