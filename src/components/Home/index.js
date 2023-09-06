import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BG_IMG } from "../../utills/constants";
import Authform from "../AuthForm";
import Baselayout from "../Baselayout";
import styles from "./styles.module.css";

const Home = () => {
  const userData = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (userData?.uid) {
    navigate("/browse");
  }
  return (
    <Baselayout>
      <div className="">
        <img src={BG_IMG} alt="bg" className={styles.bg} />
        <div className={`  absolute  ${styles.fromWrapper}`}>
          <Authform />
        </div>
      </div>
    </Baselayout>
  );
};

export default Home;
