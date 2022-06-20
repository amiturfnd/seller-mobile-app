import React, {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  useColorScheme,
  Dimensions,
  View,
} from 'react-native';
import { getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies } from '../services/apis';
import { SliderBox } from "react-native-image-slider-box";
import MoviesList from '../components/MoviesList';

const dimensions = Dimensions.get('screen');

const Home: React.FC = ({navigation}) => {
  const [upcomingMoviesImages, setupcomingMoviesImages] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [familyMovies, setfamilyMovies] = useState([]);
  const [popularTvs, setpopularTvs] = useState([]);
  const [err, setErr] = useState("Working");
  // const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setupcomingMoviesImages(movies.map(mov => `https://image.tmdb.org/t/p/w500${mov.poster_path}`));
    });
    getPopularMovies().then(movies => {
      setpopularMovies(movies);
    });

    getPopularTv().then(movies => {
      setpopularTvs(movies);
    });

    getFamilyMovies().then(movies => {
      setfamilyMovies(movies);
    });

    // setTimeout(() => {
    //   setisLoading(false);
    // }, 2000);
  }, []);

  // if (isLoading) {
  //   return (
  //     <View style={[styles.container, styles.horizontal]}>
  //       <ActivityIndicator size="large" color="#00ff00" animating={true} />
  //     </View>
  //   );
  // }

  return (
    <ScrollView>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={upcomingMoviesImages}
          sliderBoxHeight={dimensions.height/1.5}
          autoplay={true}
          dotStyle={styles.sliderStyle}
          circleLoop={true}
        />
      </View>

      <MoviesList title="Popular Movies" content={popularMovies} navigation={navigation} />

      <MoviesList title="Popular Tvs" content={popularTvs} navigation={navigation} />
      
      <MoviesList title="Family Movies" content={familyMovies} navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    // display: 'flex'
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  sliderStyle: {
    // display: `flex`
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Home;
