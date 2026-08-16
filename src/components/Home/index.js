"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Authform from "../AuthForm";
import Baselayout from "../Baselayout";
import styles from "./styles.module.css";

const Home = () => {
  const userData = useSelector((state) => state.user);
  const router = useRouter();

  if (userData?.uid) {
    router.push("/browse");
  }
  return (
    <Baselayout>
      <div className={styles.bgWrapper}>
        {Array(6)
          .fill(1)
          .map((item) => (
            <div className={styles.cube} key={item}></div>
          ))}
        <div className={`  absolute  ${styles.fromWrapper}`}>
          <Authform />
        </div>
      </div>
    </Baselayout>
  );
};

export default Home;
