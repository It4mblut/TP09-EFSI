import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemList from '../components/ItemList';

export default function Favorites({ favoritos, agregarFavorito, quitarFavorito }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Mis Favoritos</Text>
      
      {favoritos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessage}>No hay elementos favoritos.</Text>
        </View>
      ) : (
        <ItemList
          pokemones={favoritos}
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
    paddingTop: 15,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2b2d42',
    marginBottom: 15,
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#8d99ae',
    textAlign: 'center',
  },
});