import { Modal } from "antd";
import { Hourglass, StarFour, TrendUp } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieList from "../../hooks/useMovieList";
import usePopularList from "../../hooks/usePopularList";
import useTopRatedList from "../../hooks/useTopratedList";
import useUpcomingList from "../../hooks/useUpcomingList";
import { toggleSearchModal } from "../../utills/headerSlice";
import { addMovieByName } from "../../utills/movieSlice";
import Baselayout from "../Baselayout";
import MovieContainer from "../MovieContainer";
import MovieList from "../MovieList";
import SearchModal from "../SearchModal";
import Skeleton from "../Skeleton";
import styles from "./styles.module.css";
const Movies = () => {
  useMovieList();
  usePopularList();
  useTopRatedList();
  useUpcomingList();
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upcomingList = useSelector((state) => state.movies.upcomingMovies);
  const modalOpen = useSelector((state) => state.search.open);
  const [open, setOpen] = useState({
    popular: false,
    topRated: false,
    upcoming: false,
  });

  const handleClick = (name) => {
    setOpen({
      [name]: !open[name],
    });
  };

  const keyDownhandler = (e) => {
    if (e?.code === "KeyM" && e?.ctrlKey) {
      dispatch(toggleSearchModal(true));
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownhandler);
    return () => {
      document.removeEventListener("keydown", keyDownhandler);
    };
  }, [modalOpen]);

  if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingList)
    return <Skeleton />;

  const handleClose = () => {
    dispatch(toggleSearchModal(false));
    dispatch(addMovieByName({}));
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

        <div className={` pb-4 ${styles.bg}`}>
          <div>
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
                {open.topRated && (
                  <MovieList movies={topRatedMovies?.results} />
                )}
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
        <Modal
          open={modalOpen}
          onCancel={handleClose}
          footer={null}
          className={styles.modalWrapper}
          width={"80%"}
        >
          <SearchModal />
        </Modal>
      </div>
    </Baselayout>
  );
};

export default Movies;
