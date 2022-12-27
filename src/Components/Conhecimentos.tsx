import React from "react";
import styles from "../styles/Conhecimentos.module.css";
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import ReactSvg from "./UiElements/ReactSvg";
import NextSvg from "./UiElements/NextSvg";
import GraphqlSvg from "./UiElements/GraphqlSvg";

const variants = {
  default: { scale: 1 },
  active: {
    scale: 1.2,
    transition: {
      type: "spring",
      bounce: 0.7,
      velocity: 30,
    },
  },
};

const Conhecimentos = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);
  return (
    <div className={styles.wrapperConhecimentos}>
      <section className={`${styles.conhecimentos} container`}>
        <h1>What i know?</h1>
        <motion.div
          style={{ scale }}
          variants={variants}
          initial="default"
          whileHover="active"
          className={styles.bubble}
        >
          <NextSvg />
        </motion.div>
      </section>
    </div>
  );
};

export default Conhecimentos;
