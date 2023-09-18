import React from "react";
import MovieCard from "../MovieCard";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
const MovieList = ({ movies }) => {
  const open = useSelector((state) => state.search.open);
  return (
    <div
      className={`inline-flex flex-wrap gap-4 justify-evenly w-full ${
        styles.movieListWrapper
      } ${open ? "bgDark" : "bg-black"}`}
    >
      {movies.map((item) => (
        <MovieCard movie={item} key={item.id} />
      ))}
    </div>
  );
};

export default MovieList;
