import ItemList from "../components/ItemList";

function Favorites({ favoritos, quitarFavorito }) {
  return (
    <main className="app-wrapper">
      <h2 className="page-title">Mis Favoritos</h2>
      {favoritos.length === 0 ? (
        <p className="empty-message">Todavía no tenés Pokémon favoritos.</p>
      ) : (
        <ItemList
          pokemones={favoritos}
          favoritos={favoritos}
          agregarFavorito={() => {}}
          quitarFavorito={quitarFavorito}
        />
      )}
    </main>
  );
}

export default Favorites;