import axios from "axios";
import {Movie} from "./interfaces";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "971ad43a166073f54766ead30886e5d5";

export const getPopularMovies = async (): Promise<Movie[]> => {
  const resp = await axios.get(
    `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  return resp.data.results;
};

export const getPopularTv = async (): Promise<Movie[]> => {
  const resp = await axios.get(
    `${apiUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  return resp.data.results;
};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const resp = await axios.get(
    `${apiUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
  );
  return resp.data.results;
};

export const getFamilyMovies = async (): Promise<Movie[]> => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=10751`
  );
  return resp.data.results;
};

export const getMovie = async (id: string): Promise<Movie> => {
  const resp = await axios.get(
    `${apiUrl}/movie/${id}?api_key=${apiKey}`
  );
  return resp.data;
};
