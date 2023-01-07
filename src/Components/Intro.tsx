import styles from "../styles/Intro.module.css";
import MouseSvg from "./UiElements/Svg/MouseSvg";
import { motion, Variants } from "framer-motion";
import Subtitle from "./Subtitle";

export const introVariant: Variants = {
  default: {
    opacity: 0.5,
  },
  active: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      delayChildren: 0.06,
      staggerChildren: 0.06,
    },
  },
};

const nameVariant: Variants = {
  default: {
    bottom: "-500%",
  },
  active: {
    bottom: "0%",
  },
};

function splitPhrase(text: string) {
  return text
    .split("")
    .filter((item) => item.trim())
    .map((letter, index) => (
      <motion.span key={letter + index} variants={nameVariant}>
        {letter}
      </motion.span>
    ));
}

const Intro = () => {
  return (
    <section className={`${styles.intro} container`}>
      <Subtitle>Dev Front-end | UI Designer</Subtitle>
      <motion.h1
        className="title"
        variants={introVariant}
        initial="default"
        whileInView="active"
      >
        {splitPhrase("Olá,")} {splitPhrase("eu")} {splitPhrase("sou")}{" "}
        {splitPhrase("Gabriel")} {splitPhrase("Coutinho")}
      </motion.h1>
      <motion.a
        className={`${styles.button} ${styles.primary}`}
        href={require("../public/curriculo.pdf")}
        target="_blank"
      >
        Ir direto ao ponto
      </motion.a>
      <motion.a
        href="#contato"
        className={`${styles.button} ${styles.secundary}`}
        // initial={{ scale: 0, opacity: 0 }}
        // animate={{
        //   scale: [0, 1.3, 1],
        //   opacity: 1,
        //   transition: {
        //     type: "spring",
        //     delay: 1.7,
        //     duration: 3,
        //   },
        // }}
      >
        Ou dar um olá
      </motion.a>
      <div className={styles.mouse}>
        <MouseSvg />
      </div>
    </section>
  );
};

export default Intro;
