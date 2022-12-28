import React from "react";
import styles from "../styles/Intro.module.css";
import MouseSvg from "./UiElements/Svg/MouseSvg";

const Intro = () => {
  return (
    <section className={`${styles.intro} container`}>
      <h1 className="title">
        Hi, i am <span className="destaque">Christopher Hansen</span>
      </h1>
      <span className={styles.subTitle}>Dev Front-end | UI Designer</span>
      <div className={styles.mouse}>
        <MouseSvg />
      </div>
    </section>
  );
};

export default Intro;
