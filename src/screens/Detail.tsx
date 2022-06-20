import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Modal,
  Dimensions,
  View,
} from 'react-native';
import PlayButton from '../components/PlayButton';
import { getMovie } from '../services/apis';
import { Movie } from '../services/interfaces';


const Detail: React.FC = ({route, navigation}) => {
  const [movie, setmovie] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const {movieId} = route.params;

  useEffect(() => {
    getMovie(movieId).then((data: Movie) => {
      setmovie(data);
      setisLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" animating={true} />
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }}
      />
      <View>
        <PlayButton />
      </View>
      <View style={styles.container}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <View style={styles.genresContainer}>
          {movie.genres.map(genre => {
            return <Text key={genre.id} style={styles.genres}>{genre.name}</Text>
          })}
        </View>
        <Text style={styles.release_date}>IMDB: {movie.vote_average}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.release_date}>Release Date: {movie.release_date}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  image: {
    height: 500
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12
  },
  genresContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 16,
    marginBottom: 16
  },
  genres: {
    marginRight: 8,
    fontWeight: 'bold'
  },
  overview: {
    padding: 8,
    fontSize: 16,
  },
  release_date: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default Detail;
