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
import { variantsConhecimentos } from "./UiElements/FramerMotion/ConhecimentosVariants";

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
        <h1 className="title">Coisinhas q sei...</h1>
        <motion.div className={styles.icons}>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#61DAFB" }}
          >
            <ReactSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
          >
            <NextSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#E535AB" }}
          >
            <GraphqlSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#1B73BA" }}
          >
            <CssSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
          >
            <GitSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#FC490B" }}
          >
            <HtmlSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#FFDE25" }}
          >
            <JavascriptSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#CF649A" }}
          >
            <SassSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#017ACB" }}
          >
            <TypescriptSvg fill={SVGColor} />
          </motion.div>
          <motion.div
            variants={variantsConhecimentos}
            initial={"default"}
            whileInView="active"
            whileHover="hover"
            style={{ color: "#41B883" }}
          >
            <VueSvg fill={SVGColor} />
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Conhecimentos;
