import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import searchMovieByName from "../../utills/searchMovieByName";
import { addMovieByName, addRecentSearch } from "../../utills/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { KeyReturn, MagnifyingGlass } from "phosphor-react";
import MovieList from "../MovieList";

const SearchModal = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();
  const recentMovies = useSelector((state) => state.movies.recentSearch);
  const searchedMovie = useSelector((state) => state.movies.movieByName);
  const inpRef = useRef(null);
  const modalOpen = useSelector((state) => state.search.open);

  const handleMovieByName = async (e) => {
    e.preventDefault();
    if (!movie) {
      return;
    }
    const movies = await searchMovieByName(movie);
    dispatch(addRecentSearch(movie));
    dispatch(addMovieByName(movies));
  };

  const handleRecentSearch = async (recentMovie) => {
    const movies = await searchMovieByName(recentMovie);
    dispatch(addMovieByName(movies));
  };

  useEffect(() => {
    if (modalOpen) {
      inpRef?.current?.focus();
    }
    return () => {
      setMovie("");
    };
  }, [modalOpen]);

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
            ref={inpRef}
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
export default SearchModal;
