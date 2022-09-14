import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.landingHome}>
      <div className={styles.landingHomeBackgroundPattern}>Chatto</div>
      <div className={styles.landingHomeText}>
        <h1 className={styles.landingHomeTitle}>
          Зарегистрируйся. Найди друзей. Общайся.
        </h1>
        <p className={styles.landingHomeDescription}>
          Будь ближе к своим близким, даже когда ты от них далеко. Chatto
          поможет тебе в этом.
        </p>
      </div>
      <div
        className={`${styles.landingHomeAppPreview} animate__animated animate__fadeInRight`}
      >
        <img
          className={styles.landingHomeAppPreviewImage}
          src="/images/app-preview.png"
          alt="app-preview"
        />
      </div>
    </div>
  );
};

export default Home;
