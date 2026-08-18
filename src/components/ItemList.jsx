import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import ItemCard from './ItemCard';

export default function ItemList({ pokemones, favoritos, agregarFavorito, quitarFavorito }) {
  if (pokemones.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessage}>No encontramos resultados.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={pokemones}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        const esFavorito = favoritos.some((fav) => fav.id === item.id);
        return (
          <ItemCard
            pokemon={item}
            esFavorito={esFavorito}
            agregarFavorito={agregarFavorito}
            quitarFavorito={quitarFavorito}
          />
        );
      }}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 18,
    color: '#8d99ae',
  },
});