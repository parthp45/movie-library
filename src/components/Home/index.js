import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
      <div className={styles.bgWrapper}>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={`  absolute  ${styles.fromWrapper}`}>
          <Authform />
        </div>
      </div>
    </Baselayout>
  );
};

export default Home;
