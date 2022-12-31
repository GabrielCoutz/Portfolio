import styles from "../styles/Intro.module.css";
import MouseSvg from "./UiElements/Svg/MouseSvg";
import { motion, Variants } from "framer-motion";

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

function createDiv(text: string) {
  return text
    .split("")
    .filter((item) => item.trim())
    .map((letter, index) => (
      <motion.span key={letter + index} variants={nameVariant}>
        {letter}
      </motion.span>
    ));
}

export const subtitleVariant: Variants = {
  default: {
    background:
      "linear-gradient(270.4deg, rgb(14 14 14) -27.9%, rgb(14 14 14) 118.28%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
  active: {
    transition: {
      delay: 1,
      duration: 1,
    },
    background:
      "linear-gradient(270.4deg, rgb(39 27 181) -27.9%, rgb(79 67 209) 118.28%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
};

const Intro = () => {
  return (
    <section className={`${styles.intro} container`}>
      <motion.span
        className={styles.subTitle}
        variants={subtitleVariant}
        initial="default"
        whileInView="active"
      >
        Dev Front-end | UI Designer
      </motion.span>
      <motion.h1
        className="title"
        variants={introVariant}
        initial="default"
        whileInView="active"
      >
        {createDiv("Hi,")} {createDiv("i")} {createDiv("am")}{" "}
        {createDiv("Chistopher")} {createDiv("Hansen")}
      </motion.h1>
      <div className={styles.mouse}>
        <MouseSvg />
      </div>
    </section>
  );
};

export default Intro;
