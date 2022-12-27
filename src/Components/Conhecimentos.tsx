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

const Conhecimentos = () => {
  return (
    <div className={styles.wrapperConhecimentos}>
      <section className={`${styles.conhecimentos}`}>
        <h1>What i know?</h1>
        <motion.div>
          <ReactSvg />
          <NextSvg />
          <GraphqlSvg />
          <CssSvg />
          <GitSvg />
          <HtmlSvg />
          <JavascriptSvg />
          <SassSvg />
          <TypescriptSvg />
          <VueSvg />
        </motion.div>
      </section>
    </div>
  );
};

export default Conhecimentos;
