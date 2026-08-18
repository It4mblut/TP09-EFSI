import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { obtenerPokemones } from "./services/api";
import "./estilo.css";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        const datos = await obtenerPokemones();
        setPokemones(datos);
      } catch (err) {
        setError("Error al cargar los Pokémon");
      } finally {
        setLoading(false);
      }
    };
    cargarDatos();
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarFavorito = (pokemon) => {
    if (!favoritos.some((f) => f.id === pokemon.id)) {
      setFavoritos([...favoritos, pokemon]);
    }
  };

  const quitarFavorito = (id) => {
    setFavoritos(favoritos.filter((f) => f.id !== id));
  };

  return (
    <BrowserRouter>
      <header className="header">
        <h1>Pokédex TP09</h1>
        <nav>
          <Link to="/">Inicio</Link> | <Link to="/favoritos">Favoritos</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              pokemones={pokemones}
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              loading={loading}
              error={error}
              favoritos={favoritos}
              agregarFavorito={agregarFavorito}
              quitarFavorito={quitarFavorito}
            />
          }
        />
        <Route
          path="/favoritos"
          element={
            <Favorites
              favoritos={favoritos}
              quitarFavorito={quitarFavorito}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;