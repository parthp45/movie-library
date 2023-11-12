import { FilmSlate, PlayCircle, Star } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { MOVIE_IMG_BASE_URL } from "../../utills/constants";
import { getFormatedDate } from "../../utills/getFormatedDate";
import styles from "./styles.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.wrapper}  shadow-sm shadow-gray-500 rounded-md p-2`}
      >
        {
          <>
            {movie?.poster_path ? (
              <img
                src={`${MOVIE_IMG_BASE_URL}/${movie?.poster_path}`}
                alt={movie.title}
                className={`${styles.movieImg} w-full rounded-md`}
              />
            ) : (
              <div className={styles.defaultBg}>
                <FilmSlate size={210} color="#fdc326" weight="duotone" />
              </div>
            )}
          </>
        }
      </div>
      <div className={`bg-black ${styles.infoWrapper} `}>
        <div className={`flex items-center justify-between`}>
          <h1 className={`text-lg text-white font-medium w-[200px]`}>
            {movie?.title}
          </h1>
          <Link to={`/movie/${movie.id}`} preventScrollReset={true}>
            <PlayCircle
              size={50}
              color="#fffafa"
              weight="fill"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className={`flex items-center justify-between`}>
          <p className="text-base text-slate-400 ">
            {getFormatedDate(movie?.release_date)}
          </p>
          <p className="text-red-50 font-medium flex items-center gap-2 py-2">
            {Math.floor(movie?.vote_average)}

            <Star size={20} color="#ffe400" weight="fill" />
          </p>
        </div>
        <span className="text-base text-slate-300 ">
          {movie?.overview.slice(0, 300)}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
