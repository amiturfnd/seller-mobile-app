import React, {memo} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Movie } from '../services/interfaces';
import MovieCard from './MovieCard';

interface MoviesListProps {
  title: string;
  content: Movie[];
  navigation: any;
}

const MoviesList: React.FC<MoviesListProps> = ({title, content, navigation}): React.ReactElement => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.sliderContainer}>
        <FlatList
          data={content}
          horizontal={true}
          renderItem={({item}) => <MovieCard movie={item} navigation={navigation} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    // display: 'flex'
  },
  title: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600'
  }
});

export default memo(MoviesList);
