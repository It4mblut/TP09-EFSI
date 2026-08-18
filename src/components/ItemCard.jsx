function ItemCard({ pokemon, esFavorito, agregarFavorito, quitarFavorito }) {
  const tipos = pokemon.types.map((t) => t.type.name).join(", ");

  return (
    <article className="card">
      <div className="card-header">
        <span className="card-id">#{String(pokemon.id).padStart(3, "0")}</span>
        <h2>{pokemon.name}</h2>
        <p className="type-badge">{tipos}</p>
      </div>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="card-image"
      />
      <div className="card-details">
        <p>Peso: {pokemon.weight / 10} kg</p>
        <p>Altura: {pokemon.height / 10} m</p>
      </div>
      <button
        onClick={() =>
          esFavorito ? quitarFavorito(pokemon.id) : agregarFavorito(pokemon)
        }
        className={esFavorito ? "btn-fav remove" : "btn-fav add"}
      >
        {esFavorito ? "★ Quitar Favorito" : "☆ Agregar Favorito"}
      </button>
    </article>
  );
}

export default ItemCard;