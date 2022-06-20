import React, {memo, useEffect} from 'react';
import { Text, Pressable, Image, StyleSheet } from 'react-native';
import { Movie } from '../services/interfaces';

interface PlayButton {
  movie: Movie;
}

const PlayButton: React.FC<PlayButton>  = ({movie}) => {
  
  return (
    <Pressable>
      <Text>I'm pressable!</Text>
    </Pressable>
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

export default memo(PlayButton);
