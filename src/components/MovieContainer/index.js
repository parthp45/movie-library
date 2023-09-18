import React from "react";
import { useSelector } from "react-redux";
import useVideoInfo from "../../hooks/useVideoInfo";
import styles from "./styles.module.css";

const MovieContainer = ({ videoId, movieInfo }) => {
  useVideoInfo(videoId);

  const videoData = useSelector((state) => state.videoInfo);

  return (
    <div>
      <div className={`absolute top-[40%] left-[4%]  ${styles.contentWrapper}`}>
        <h1 className=" text-5xl mb-2 text-white font-semibold">
          {movieInfo?.title}
        </h1>
        <p className="text-white text-lgl font-medium">{movieInfo?.overview}</p>
      </div>
      <iframe
        className={`w-full aspect-video ${styles.video}`}
        src={`https://www.youtube.com/embed/${videoData?.key}?autoplay=1&mute=1&rel=0&controls=1&showinfo=0&loop=1&iv_load_policy=3&playlist=${videoData?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default MovieContainer;
