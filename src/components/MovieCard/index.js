import { Star } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { MOVIE_IMG_BASE_URL } from "../../utills/constants";
import styles from "./styles.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      className={`${styles.wrapper}  shadow-sm shadow-gray-500 rounded-md p-2`}
    >
      <img
        src={`${MOVIE_IMG_BASE_URL}/${movie?.poster_path}`}
        alt={movie.title}
        className={`${styles.movieImg} w-full rounded-md`}
      />

      <h2 className="text-white text-md font-medium pt-2">{movie?.title}</h2>
      <p className="text-red-50 font-medium flex items-center gap-2 py-2">
        {movie?.vote_average}

        <Star size={20} color="#ffe400" weight="fill" />
      </p>
      <Link
        to={`/movie/${movie.id}`}
        preventScrollReset={true}
        className={`text-sm text-white font-medium w-full bg-[#e50914] hover:bg-red-800 rounded-sm inline-block text-center py-2 ${styles.link}`}
      >
        More info
      </Link>
    </div>
  );
};

export default MovieCard;
