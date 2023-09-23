import { Modal, message } from "antd";
import {
  Hourglass,
  KeyReturn,
  MagnifyingGlass,
  StarFour,
  TrendUp,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieList from "../../hooks/useMovieList";
import usePopularList from "../../hooks/usePopularList";
import useTopRatedList from "../../hooks/useTopratedList";
import useUpcomingList from "../../hooks/useUpcomingList";
import { toggleSearchModal } from "../../utills/headerSlice";
import { addMovieByName, addRecentSearch } from "../../utills/movieSlice";
import searchMovieByName from "../../utills/searchMovieByName";
import Baselayout from "../Baselayout";
import MovieContainer from "../MovieContainer";
import MovieList from "../MovieList";
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
  const searchedMovie = useSelector((state) => state.movies.movieByName);
  const recentMovies = useSelector((state) => state.movies.recentSearch);
  const modalOpen = useSelector((state) => state.search.open);
  const [open, setOpen] = useState({
    popular: false,
    topRated: false,
    upcoming: false,
  });

  const handleClick = (name) => {
    setOpen({
      ...open,
      [name]: !open[name],
    });
  };

  const keyDownhandler = (e) => {
    if (e?.code === "KeyB" && e?.ctrlKey) {
      dispatch(toggleSearchModal(true));
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownhandler);

    return () => {
      document.removeEventListener("keydown", keyDownhandler);
    };
  }, []);

  if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingList)
    return <Skeleton />;

  const handleClose = () => {
    dispatch(toggleSearchModal(false));
    dispatch(addMovieByName({}));
  };

  const SearchModal = () => {
    const [movie, setMovie] = useState("");

    const handleMovieByName = async (e) => {
      e.preventDefault();
      if (!movie) {
        return message.error("Please enter a movie name");
      }
      const movies = await searchMovieByName(movie);
      dispatch(addRecentSearch(movie));
      dispatch(addMovieByName(movies));
    };

    const handleRecentSearch = async (recentMovie) => {
      const movies = await searchMovieByName(recentMovie);
      dispatch(addMovieByName(movies));
    };

    return (
      <section className={`${styles.searchContentWrapper}`}>
        <form className={`py-7`}>
          <div
            className={`relative flex justify-center items-center ${styles.inputWrapper}`}
          >
            <MagnifyingGlass size={20} color="#d0484f" weight="duotone" />
            <input
              type="text"
              className={`p-3 bg-transparent w-full ${styles.input}`}
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
              placeholder="Search your movies"
              autoFocus
            />
            <button
              className={`rounded-3xl  py-3 px-5 text-white ${styles.searchBtn}`}
              onClick={(e) => handleMovieByName(e)}
            >
              <KeyReturn size={20} color="#d0484f" weight="duotone" />
            </button>
          </div>
        </form>
        {recentMovies?.length > 0 && (
          <>
            <div className={`${styles.recentSearchWrapper}`}>
              {[...new Set(recentMovies)]?.map((item) => (
                <span
                  key={item}
                  className={`${styles.recentMovie}`}
                  onClick={() => handleRecentSearch(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </>
        )}
        <div className={`${styles.moviesWrapper}`}>
          {searchedMovie?.results?.length > 0 ? (
            <div className={`${styles.cardsWrapper}`}>
              <MovieList movies={searchedMovie?.results} />
            </div>
          ) : (
            searchedMovie?.results?.length === 0 && (
              <div>
                <h2 className={`text-5xl text-center text-white`}>
                  No results found
                </h2>
              </div>
            )
          )}
        </div>
      </section>
    );
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
