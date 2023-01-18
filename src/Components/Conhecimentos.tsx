import React from "react";
import styles from "../styles/Conhecimentos.module.css";
import { motion } from "framer-motion";
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
import WooCommerceSvg from "./UiElements/Svg/WooCommerceSvg";
import WordpressSvg from "./UiElements/Svg/WordpressSvg";
import PhpSvg from "./UiElements/Svg/PhpSvg";

const SVGColor = "#0e0e0e";

const Conhecimentos = () => {
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
            style={{ color: "#61DAFB" }}
            title="React"
          >
            <ReactSvg fill={SVGColor} />
          </motion.div>
          <motion.div initial="default" whileHover="hover" title="Next.js">
            <NextSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#E535AB" }}
            title="GraphQL"
          >
            <GraphqlSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#1B73BA" }}
            title="CSS"
          >
            <CssSvg fill={SVGColor} />
          </motion.div>
          <motion.div initial="default" whileHover="hover" title="Git">
            <GitSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#FC490B" }}
            title="HTML"
          >
            <HtmlSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#FFDE25" }}
            title="Javascript"
          >
            <JavascriptSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#CF649A" }}
            title="SASS"
          >
            <SassSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#017ACB" }}
            title="Typescript"
          >
            <TypescriptSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#9B5C8F" }}
            title="WooCommerce"
          >
            <WooCommerceSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#777BB3" }}
            title="PHP"
          >
            <PhpSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#00769D" }}
            title="Wordpress"
          >
            <WordpressSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            initial="default"
            whileHover="hover"
            style={{ color: "#41B883" }}
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
