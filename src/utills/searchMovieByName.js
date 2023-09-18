import { options } from "../utills/apiOptions";

const searchMovieByName = async (name) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
    options
  );
  const response = await res.json();
  return response;
};
export default searchMovieByName;
