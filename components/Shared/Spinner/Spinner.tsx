import React from "react";
import styles from "./Spinner.module.scss";
const Spinner = () => {
  return <div className={styles.spinnerContainer}><div className={styles.spinner} aria-label="app is loading"></div></div>
};

export default Spinner;
