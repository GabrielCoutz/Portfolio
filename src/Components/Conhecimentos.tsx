import React from "react";
import styles from "../styles/Conhecimentos.module.css";
import { motion } from "framer-motion";
import ReactSvg from "./UiElements/ReactSvg";
import NextSvg from "./UiElements/NextSvg";
import GraphqlSvg from "./UiElements/GraphqlSvg";
import CssSvg from "./UiElements/CssSvg";
import GitSvg from "./UiElements/GitSvg";
import HtmlSvg from "./UiElements/HtmlSvg";
import JavascriptSvg from "./UiElements/JavascriptSvg";
import SassSvg from "./UiElements/SassSvg";
import TypescriptSvg from "./UiElements/TypescriptSvg";
import VueSvg from "./UiElements/VueSvg";

const SVGColor = "#0e0e0e";

const variants = {
  default: {
    opacity: 0,
    scale: 0,
  },
  active: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.7,
      velocity: 2,
    },
    scale: 1.1,
  },
};

const Conhecimentos = () => {
  return (
    <div className={styles.wrapperConhecimentos}>
      <section className={`${styles.conhecimentos} container`}>
        <h1>What i know?</h1>
        <motion.div className={styles.icons}>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#61DAFB" }}
          >
            <ReactSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
          >
            <NextSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#E535AB" }}
          >
            <GraphqlSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#1B73BA" }}
          >
            <CssSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
          >
            <GitSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#FC490B" }}
          >
            <HtmlSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#FFDE25" }}
          >
            <JavascriptSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#CF649A" }}
          >
            <SassSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#017ACB" }}
          >
            <TypescriptSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#41B883" }}
          >
            <VueSvg fill={SVGColor} />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Conhecimentos;
