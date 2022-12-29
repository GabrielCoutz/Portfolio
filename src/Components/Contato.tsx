import Link from "next/link";
import React from "react";
import styles from "../styles/Contato.module.css";
import GitHubSvg from "./UiElements/Svg/GitHubSvg";
import InstagramSvg from "./UiElements/Svg/InstagramSvg";
import LinkedinSvg from "./UiElements/Svg/LinkedinSvg";

const Contato = () => {
  return (
    <section className={`${styles.contato} container`} id="contato">
      <h1 className="title">
        Bora trocar uma <span className="destaque">ideia?</span>
      </h1>
      <ul className={styles.lista}>
        <Link href="https://github.com/gabrielcoutz" target="_blank">
          <GitHubSvg />
          gabrielcoutz
        </Link>
        <Link href="https://www.linkedin.com/in/gabrielcoutz" target="_blank">
          <LinkedinSvg />
          gabrielcoutz
        </Link>
        <Link
          href="https://www.instagram.com/gabrielcoutinhoz/"
          target="_blank"
        >
          <InstagramSvg />
          gabrielcoutinhoz
        </Link>
      </ul>
    </section>
  );
};

export default Contato;
