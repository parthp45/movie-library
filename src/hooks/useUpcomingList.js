import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utills/apiOptions";
import { addUpcomingMovies } from "../utills/movieSlice";

const useUpcomingList = () => {
  const dispatch = useDispatch();
  const upcomingList = useSelector((state) => state.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      options
    );
    const response = await res.json();
    dispatch(addUpcomingMovies(response));
  };
  useEffect(() => {
    if (!upcomingList) {
      getUpcomingMovies();
    }
  }, []);

  return;
};

export default useUpcomingList;
