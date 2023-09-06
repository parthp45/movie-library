import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utills/apiOptions";
import { addUpcomingMovies } from "../utills/movieSlice";

const useUpcomingList = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      options
    );
    const response = await res.json();
    dispatch(addUpcomingMovies(response));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  return;
};

export default useUpcomingList;
