import React from "react";
import styles from "./styles.module.css";
import { Warning } from "phosphor-react";

const Offline = () => {
  return (
    <div className={styles.wrapper}>
      <Warning size={105} />
      <h1>Looks like you are Offline!</h1>
    </div>
  );
};

export default Offline;
