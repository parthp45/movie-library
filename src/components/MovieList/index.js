import React from "react";
import MovieCard from "../MovieCard";
import styles from "./styles.module.css";
const MovieList = ({ movies }) => {
  return (
    <div
      className={`inline-flex flex-wrap gap-4 justify-evenly w-full ${styles.movieListWrapper}`}
    >
      {movies.map((item) => (
        <MovieCard movie={item} key={item.id} />
      ))}
    </div>
  );
};

export default MovieList;
