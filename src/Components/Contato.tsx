import Link from "next/link";
import styles from "../styles/Contato.module.css";
import GitHubSvg from "./UiElements/Svg/GitHubSvg";
import LinkedinSvg from "./UiElements/Svg/LinkedinSvg";
import Subtitle from "./Subtitle";

const Contato = () => {
  return (
    <section className={`${styles.contato} container`} id="contato">
      <Subtitle>Cola aí</Subtitle>
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
      </ul>
    </section>
  );
};

export default Contato;
