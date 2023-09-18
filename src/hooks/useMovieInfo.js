import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utills/apiOptions";
import { addMovieInfoById } from "../utills/movieSlice";

const useMovieInfo = (movieId) => {
  const movieData = useSelector((state) => state.movies.movieInfo);
  const dispatch = useDispatch();
  const getMovieInfoById = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US'`,
      options
    );
    const response = await res.json();
    dispatch(addMovieInfoById(response));
  };
  useEffect(() => {
    if (!movieData) {
      getMovieInfoById();
    }
  }, []);
};
export default useMovieInfo;
