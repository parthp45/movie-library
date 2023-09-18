import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utills/apiOptions";
import { addTopRatedMovies } from "../utills/movieSlice";

const useTopRatedList = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  const getTopratedMovieList = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
      options
    );
    const response = await res.json();
    dispatch(addTopRatedMovies(response));
  };
  useEffect(() => {
    if (!topRatedMovies) {
      getTopratedMovieList();
    }
  }, []);

  return;
};

export default useTopRatedList;
