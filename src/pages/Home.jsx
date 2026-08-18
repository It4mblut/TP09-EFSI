import SearchBar from "../components/searchbar";
import ItemList from "../components/ItemList";

function Home({
  pokemones,
  busqueda,
  setBusqueda,
  loading,
  error,
  favoritos,
  agregarFavorito,
  quitarFavorito,
}) {
  const pokemonesFiltrados = pokemones.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="app-wrapper">
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />

      {loading && <p className="loading-text">Cargando Pokémon...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && (
        <ItemList
          pokemones={pokemonesFiltrados}
          favoritos={favoritos}
          agregarFavorito={agregarFavorito}
          quitarFavorito={quitarFavorito}
        />
      )}
    </main>
  );
}

export default Home;