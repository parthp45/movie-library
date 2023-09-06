import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utills/apiOptions";
import { addTopRatedMovies } from "../utills/movieSlice";

const useTopRatedList = () => {
  const dispatch = useDispatch();

  const getTopratedMovieList = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
      options
    );
    const response = await res.json();
    dispatch(addTopRatedMovies(response));
  };
  useEffect(() => {
    getTopratedMovieList();
  }, []);

  return;
};

export default useTopRatedList;
