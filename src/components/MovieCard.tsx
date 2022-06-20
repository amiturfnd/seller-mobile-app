import React, {memo, useEffect} from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Movie } from '../services/interfaces';

interface MovieCardProps {
  movie: Movie;
  navigation: any;
}

const MovieCard: React.FC<MovieCardProps>  = ({movie, navigation}) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', {movieId: movie.id})}>
      <Image style={styles.image}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }}
      />
      {!movie.poster_path && <Text style={styles.movieName}>{movie.title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: `relative`,
    alignItems: 'center',
    justifyContent: 'center',
    height: '200'
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20
  },
  movieName: {
    top: 10,
    position: 'absolute',
    width: 100,
    textAlign: 'center',
    alignSelf: 'center'
  }
});

export default memo(MovieCard);
