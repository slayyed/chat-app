import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.landingHome}>
      <div className={styles.landingHomeGradientLine}></div>
      <div
        className={`${styles.landingHomeIntroText} animate__animated animate__fadeInDown`}
      >
        welcome to
        <span className={styles.landingHomeIntroTextLogo}>CHATTO</span>
        <span className={styles.landingHomeIntroTextStar}>*</span>
      </div>
      <div
        className={`${styles.landingHomeAppPreview} animate__animated animate__fadeInRight`}
      >
        <img src="/images/app-preview.png" alt="app-preview" />
      </div>
    </div>
  );
};

export default Home;
