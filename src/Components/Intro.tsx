import styles from "../styles/Intro.module.css";
import MouseSvg from "./UiElements/Svg/MouseSvg";
import { motion, Variants } from "framer-motion";

export const introVariant: Variants = {
  default: {
    scale: 0.4,
    opacity: 0,
  },
  active: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      delayChildren: 1,
    },
  },
};

const Intro = () => {
  return (
    <section className={`${styles.intro} container`}>
      <motion.h1
        className="title"
        variants={introVariant}
        initial="default"
        whileInView="active"
      >
        Hi, i am
        <span className="destaque"> Chistopher Hansen</span>
      </motion.h1>
      <span className={styles.subTitle}>Dev Front-end | UI Designer</span>
      <div className={styles.mouse}>
        <MouseSvg />
      </div>
    </section>
  );
};

export default Intro;
