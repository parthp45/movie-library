import { Spin } from "antd";
import { Hourglass, StarFour, TrendUp } from "phosphor-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useMovieList from "../../hooks/useMovieList";
import usePopularList from "../../hooks/usePopularList";
import useTopRatedList from "../../hooks/useTopratedList";
import useUpcomingList from "../../hooks/useUpcomingList";
import Baselayout from "../Baselayout";
import MovieContainer from "../MovieContainer";
import MovieList from "../MovieList";
import styles from "./styles.module.css";
const Movies = () => {
  useMovieList();
  usePopularList();
  useTopRatedList();
  useUpcomingList();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upcomingList = useSelector((state) => state.movies.upcomingMovies);
  const [open, setOpen] = useState({
    popular: false,
    topRated: false,
    upcoming: false,
  });

  if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingList)
    return (
      <div className={styles.spinWrapper}>
        <Spin size="large" />
      </div>
    );

  const handleClick = (name) => {
    setOpen({
      ...open,
      [name]: !open[name],
    });
  };
  return (
    <Baselayout>
      <div className={`${styles.videoWrapper}`}>
        {nowPlayingMovies?.results?.length > 0 && (
          <MovieContainer
            videoId={nowPlayingMovies?.results[0]?.id}
            movieInfo={nowPlayingMovies?.results[0]}
          />
        )}
        <div className="bg-black pb-4">
          {nowPlayingMovies?.results?.length > 0 && (
            <div className={`${styles.cardsWrapper}`}>
              <MovieList movies={nowPlayingMovies?.results} />
            </div>
          )}
          {popularMovies?.results?.length > 0 && (
            <>
              <h1
                className="text-xl text-white font-bold  my-10 p-4 bg-[#1c1c1c] m-9 flex items-center cursor-pointer gap-3"
                onClick={() => handleClick("popular")}
              >
                {"Popular"}
                <TrendUp size={20} color="#ffe400" weight="fill" />
              </h1>
              {open.popular && <MovieList movies={popularMovies?.results} />}
            </>
          )}
          {topRatedMovies?.results?.length > 0 && (
            <>
              <h1
                className="text-xl text-white font-bold  my-10 p-4 bg-[#1c1c1c] m-9 flex  cursor-pointer items-center gap-3"
                onClick={() => handleClick("topRated")}
              >
                {"Top rated"}
                <StarFour size={20} color="#ffe400" weight="fill" />
              </h1>
              {open.topRated && <MovieList movies={topRatedMovies?.results} />}
            </>
          )}
          {upcomingList?.results?.length > 0 && (
            <>
              <h1
                className="text-xl text-white font-bold  my-10 p-4 bg-[#1c1c1c] m-9 flex  cursor-pointer items-center gap-3 pb-4"
                onClick={() => handleClick("upcoming")}
              >
                {"Upcoming"}
                <Hourglass size={20} color="#ffe400" weight="fill" />
              </h1>
              {open.upcoming && <MovieList movies={upcomingList?.results} />}
            </>
          )}
        </div>
      </div>
    </Baselayout>
  );
};

export default Movies;
