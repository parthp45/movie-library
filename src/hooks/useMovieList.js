import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utills/apiOptions";
import { addNowPlayingMovies } from "../utills/movieSlice";

const useMovieList = (
  keyword = "now_playing",
  dispatcherFunction = addNowPlayingMovies
) => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${keyword}?language=en-US&page=1`,
      options
    );
    const response = await res.json();
    dispatch(dispatcherFunction(response));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return;
};

export default useMovieList;
