import { Popover, message } from "antd";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FilmSlate, User, UserCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utills/fibrebase";
import { addUser, removeUser } from "../../utills/userSlice";
import styles from "./styles.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

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
