import React from "react";
import styles from "../styles/Conhecimentos.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactSvg from "./UiElements/Svg/ReactSvg";
import NextSvg from "./UiElements/Svg/NextSvg";
import GraphqlSvg from "./UiElements/Svg/GraphqlSvg";
import CssSvg from "./UiElements/Svg/CssSvg";
import GitSvg from "./UiElements/Svg/GitSvg";
import HtmlSvg from "./UiElements/Svg/HtmlSvg";
import JavascriptSvg from "./UiElements/Svg/JavascriptSvg";
import SassSvg from "./UiElements/Svg/SassSvg";
import TypescriptSvg from "./UiElements/Svg/TypescriptSvg";
import VueSvg from "./UiElements/Svg/VueSvg";
import Subtitle from "./Subtitle";

const SVGColor = "#0e0e0e";

const Conhecimentos = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 3]);

  return (
    <motion.div
      className={styles.wrapperConhecimentos}
      initial={{ backgroundColor: "rgba(255,255,255,0)" }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,1)",
      }}
    >
      <motion.section className={`${styles.conhecimentos} container`}>
        <Subtitle>Por enquanto...</Subtitle>
        <h1 className="title">Conhecimentos</h1>

        <motion.div className={styles.icons}>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#61DAFB", scale }}
            title="React"
          >
            <ReactSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial={"default"}
            whileHover="hover"
            style={{ scale }}
            title="Next.js"
          >
            <NextSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial={"default"}
            whileHover="hover"
            style={{ color: "#E535AB", scale }}
            title="GraphQL"
          >
            <GraphqlSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial={"default"}
            whileHover="hover"
            style={{ color: "#1B73BA", scale }}
            title="CSS"
          >
            <CssSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial={"default"}
            whileHover="hover"
            style={{ scale }}
            title="Git"
          >
            <GitSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial={"default"}
            whileHover="hover"
            style={{ color: "#FC490B", scale }}
            title="HTML"
          >
            <HtmlSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial={"default"}
            whileHover="hover"
            style={{ color: "#FFDE25", scale }}
            title="Javascript"
          >
            <JavascriptSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial={"default"}
            whileHover="hover"
            style={{ color: "#CF649A", scale }}
            title="SASS"
          >
            <SassSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial={"default"}
            whileHover="hover"
            style={{ color: "#017ACB", scale }}
            title="Typescript"
          >
            <TypescriptSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial={"default"}
            whileHover="hover"
            style={{ color: "#41B883", scale }}
            title="Vue.js"
          >
            <VueSvg fill={SVGColor} />
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Conhecimentos;
