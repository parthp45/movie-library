import { FilmSlate, ThumbsUp } from "phosphor-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieInfo from "../../hooks/useMovieInfo";
import useVideoInfo from "../../hooks/useVideoInfo";
import { MOVIE_IMG_BASE_URL } from "../../utills/constants";
import { toggleSearchModal } from "../../utills/headerSlice";
import { addMovieByName } from "../../utills/movieSlice";
import Baselayout from "../Baselayout";
import InfoSkeleton from "./InfoSkeleton";
import styles from "./styles.module.css";
import { getFormatedDate } from "../../utills/getFormatedDate";

const MovieInfo = () => {
  let { id } = useParams();
  useVideoInfo(id);
  useMovieInfo(id);
  const dispatch = useDispatch();

  const videoData = useSelector((state) => state.videoInfo);
  const movieData = useSelector((state) => state.movies.movieInfo);

  useEffect(() => {
    handleClose();
  }, []);

  const handleClose = () => {
    dispatch(toggleSearchModal(false));
    dispatch(addMovieByName({}));
  };

  if (!videoData || !movieData) return <InfoSkeleton />;

  return (
    <Baselayout>
      <div className={styles.videoWrapper}>
        <iframe
          className={`w-full aspect-video ${styles.video}`}
          src={`https://www.youtube.com/embed/${videoData?.key}?autoplay=1&mute=1&rel=0&controls=1&showinfo=0&loop=1&iv_load_policy=3&playlist=${videoData?.key}&modestbranding=0"`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="bg-black text-white">
        <div
          className={`flex p-4 gap-16 flex-wrap justify-center ${styles.wrapper}`}
        >
          {
            <>
              {movieData?.backdrop_path ? (
                <img
                  src={`${MOVIE_IMG_BASE_URL}/${movieData?.backdrop_path}`}
                  alt={movieData?.title}
                  className={`shadow-md rounded-md ${styles.imgWrapper}`}
                />
              ) : (
                <div className={styles.defaultBg}>
                  <FilmSlate size={210} color="#fdc326" weight="duotone" />
                </div>
              )}
            </>
          }
          <div className={`ml-4  ${styles.content}`}>
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
              Release Date:&nbsp;&nbsp;
              {getFormatedDate(movieData?.release_date)}
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
              <ThumbsUp size={35} color="#977220" weight="fill" />
            </div>
          </div>
        </div>
      </div>
    </Baselayout>
  );
};

export default MovieInfo;
