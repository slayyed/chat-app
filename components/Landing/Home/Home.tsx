import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.landingHome}>
      <div className={styles.landingHomeGradientLine}></div>
      <div className={styles.landingHomeIntroText}>
        welcome to
        <span className={styles.landingHomeIntroTextLogo}>CHATTO</span>
        <span className={styles.landingHomeIntroTextStar}>*</span>
      </div>
    </div>
  );
};

export default Home;
