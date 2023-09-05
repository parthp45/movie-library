import { FilmSlate } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex gap-4 items-center p-5 shadow-lg bg-slate-950">
        <span>
          <FilmSlate size={26} color="rgb(229, 9, 20)" />
        </span>
        <div className="flex gap-5 ">
          <Link to={"/"} className="text-white">
            Home
          </Link>
          {/* <Link to={"/browse"} className="text-white">
            Movies
          </Link>
          <Link to={"/movie/1"} className="text-white">
            Info
          </Link> */}
        </div>
        {/* <div className="ml-auto">
          <button className="text-white text-sm bg-[#e50914] py-1 px-4 flex items-center rounded-sm hover:bg-red-800">
            Login
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
