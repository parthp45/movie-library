import { Popover, message } from "antd";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FilmSlate, MagnifyingGlass, User, UserCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../utills/fibrebase";
import { addUser, removeUser } from "../../utills/userSlice";
import styles from "./styles.module.css";
import { toggleSearchModal } from "../../utills/headerSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
      } else {
        dispatch(removeUser(user));
        navigate("/");
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        message.success("Logged out successfully");
      })
      .catch((error) => {
        message.error("Logged out failed");
      });
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const PopoverContent = () => {
    return (
      <div>
        <div className="flex items-center gap-2">
          <span>
            <User size={18} />
          </span>
          <p className="my-2">{userData?.displayName}</p>
        </div>
        <button
          className="text-white text-sm bg-[#e50914] py-1 px-4 flex justify-center m-auto items-center rounded-sm hover:bg-red-800"
          onClick={() => handleLogOut()}
        >
          Logout
        </button>
      </div>
    );
  };

  const handleSearchModal = () => {
    dispatch(toggleSearchModal(true));
  };
  return (
    <header className={`sticky top-0 z-50 ${styles.header}`}>
      <div className="flex gap-4 items-center p-5 shadow-lg bg-slate-950">
        <div className="flex gap-5 ">
          <Link to={"/"} className="text-white" preventScrollReset={true}>
            <span>
              <FilmSlate size={26} color="rgb(229, 9, 20)" />
            </span>
          </Link>
        </div>
        {!location.pathname.includes("movie") && userData?.uid && (
          <div className="ml-auto w-full">
            <div
              className={`flex items-center gap-2 ${styles.searchWrapper}`}
              onClick={() => handleSearchModal()}
            >
              <div
                className={`roundex-3xl w-full flex items-center gap-4 ${styles.search}`}
              >
                <span className={` `}>
                  <MagnifyingGlass size={20} color="#d0484f" weight="duotone" />
                </span>
                <div className={`${styles.textWrapper} `}>
                  <span className={`${styles.placeholder} text[#d0484f] `}>
                    Search
                  </span>
                </div>
              </div>
              <div
                className={`hidden md:flex gap-1 items-center ${styles.keys}`}
              >
                <span
                  className={`w-10 h-5 border border-transparent me-1 bg-[#742326] text-gray-300 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md`}
                >
                  Ctrl
                </span>
                <span
                  className={`w-10 h-5 border border-transparent me-1 bg-[#742326]  text-gray-300 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md`}
                >
                  M
                </span>
              </div>
            </div>
          </div>
        )}
        {userData?.uid && (
          <div className="ml-auto">
            <Popover
              content={<PopoverContent />}
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
              showArrow={false}
              placement="bottomRight"
              overlayClassName={`${styles.popover}`}
            >
              <UserCircle
                size={28}
                color="#e50914"
                className="cursor-pointer"
              />
            </Popover>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
