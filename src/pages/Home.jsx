import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import SearchBar from '../components/searchbar';
import ItemList from '../components/ItemList';

export default function Home({pokemones,busqueda,setBusqueda,loading,error,favoritos,agregarFavorito,quitarFavorito}) {
  const pokemonesFiltrados = pokemones.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />

      {loading && (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#e63946" />
          <Text style={styles.loadingText}>Cargando información...</Text>
        </View>
      )}

      {error && (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {!loading && !error && (
        <ItemList
          pokemones={pokemonesFiltrados}
          favoritos={favoritos}
          agregarFavorito={agregarFavorito}
          quitarFavorito={quitarFavorito}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  centerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#8d99ae',
  },
  errorText: {
    fontSize: 16,
    color: '#e63946',
    textAlign: 'center',
  },
});