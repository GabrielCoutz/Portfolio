import React from "react";
import styles from "../styles/Intro.module.css";
import MouseSvg from "./UiElements/Svg/MouseSvg";

const Intro = () => {
  return (
    <section className={`${styles.intro} container`}>
      <h1 className="title">
        Olá, sou <span className="destaque">Gabriel Coutinho</span>
      </h1>
      <span className={styles.subTitle}>Dev Front-end | UI Designer</span>
      <div className={styles.mouse}>
        <MouseSvg />
      </div>
    </section>
  );
};

export default Intro;
