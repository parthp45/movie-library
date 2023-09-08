import React from "react";
import Baselayout from "../Baselayout";
import { useParams } from "react-router-dom";
import useVideoInfo from "../../hooks/useVideoInfo";
import { useSelector } from "react-redux";
import useMovieInfo from "../../hooks/useMovieInfo";
import { MOVIE_IMG_BASE_URL } from "../../utills/constants";
import styles from "./styles.module.css";
import { ThumbsUp } from "phosphor-react";
import { Spin } from "antd";

const MovieInfo = () => {
  let { id } = useParams();
  useVideoInfo(id);
  useMovieInfo(id);

  const videoData = useSelector((state) => state.videoInfo);
  const movieData = useSelector((state) => state.movies.movieInfo);

  if (!videoData || !movieData)
    return (
      <div className={styles.spinWrapper}>
        <Spin size="large" />
      </div>
    );

  return (
    <Baselayout>
      <div className={styles.videoWrapper}>
        <iframe
          className={`w-full aspect-video ${styles.video}`}
          src={`https://www.youtube.com/embed/${videoData?.key}?autoplay=1&mute=1&rel=0&controls=1&showinfo=0&loop=1&iv_load_policy=3&playlist=${videoData?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="bg-black text-white">
        <div
          className={`flex p-4 gap-16 flex-wrap justify-center ${styles.wrapper}`}
        >
          <img
            src={`${MOVIE_IMG_BASE_URL}/${movieData?.backdrop_path}`}
            alt={movieData?.title}
            className={`shadow-md rounded-md ${styles.imgWrapper}`}
          />
          <div className={`ml-4 w-2/4 ${styles.content}`}>
            <h1 className="text-white font-semibold text-5xl  ">
              {movieData?.title}
            </h1>
            <p className={`text-white font-medium  mt-8 ${styles.about}`}>
              {movieData?.overview}
            </p>
            <h4 className={`text-white font-medium  mt-2 py-3 text-lg `}>
              Generes:
            </h4>
            <div className={`flex items-center gap-4 ${styles.genreWrapper}`}>
              {movieData?.genres.map((item) => (
                <p key={item.id} className={`${styles.genre}`}>
                  <span className={`${styles.genreName}`}>{item.name}</span>
                </p>
              ))}
            </div>
            <p className={`text-white font-medium  mt-2 py-3 text-lg`}>
              Release Date:&nbsp;&nbsp;{movieData?.release_date}
            </p>
            <span
              className={`text-white font-medium  mt-2 py-3 text-lg ${styles.textCenter}`}
            >
              Available in:&nbsp;&nbsp;
              {movieData?.spoken_languages.map((item) => (
                <span key={item.name}>{item.name}&nbsp;&nbsp;</span>
              ))}
            </span>
          </div>
          <div className={`${styles.rating} gap-1`}>
            {Math.floor(movieData?.vote_average) * 10}%
            <div className={`inline-grid place-content-center`}>
              <ThumbsUp size={35} color="#977220" weight="duotone" />
            </div>
          </div>
        </div>
      </div>
    </Baselayout>
  );
};

export default MovieInfo;
