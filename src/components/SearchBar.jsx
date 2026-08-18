function SearchBar({ busqueda, setBusqueda }) {
  return (
    <section className="search-section">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar Pokémon..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;