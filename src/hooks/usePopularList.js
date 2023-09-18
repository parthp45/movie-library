import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utills/apiOptions";
import { addPopularMovies } from "../utills/movieSlice";

const usePopularList = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);

  const getPopularMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      options
    );
    const response = await res.json();
    dispatch(addPopularMovies(response));
  };
  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
  }, []);

  return;
};

export default usePopularList;
