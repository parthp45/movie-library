import React from "react";
import styles from "./styles.module.css";
import Baselayout from "../Baselayout";
import { BG_IMG } from "../../utills/constants";
import Authform from "../AuthForm";

const Home = () => {
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
