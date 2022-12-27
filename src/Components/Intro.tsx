import React from "react";
import styles from "../styles/Intro.module.css";
import MouseSvg from "./UiElements/MouseSvg";

const Intro = () => {
  return (
    <div className="container">
      <section className={styles.intro}>
        <h1 className="title">
          Hi, i am <span className="destaque">Christopher Hansen</span>
        </h1>
        <span className={styles.subTitle}>Dev Front-end | UI Designer</span>
        <div className={styles.mouse}>
          <MouseSvg />
        </div>
      </section>
    </div>
  );
};

export default Intro;
