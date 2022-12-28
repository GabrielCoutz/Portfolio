import React from "react";
import styles from "../styles/Projetos.module.css";
import { motion, Variants } from "framer-motion";
import Card from "./Card";
import { wrapperVariant } from "./UiElements/FramerMotion/ProjetosVariants";

const Projetos = () => {
  return (
    <motion.div
      variants={wrapperVariant}
      whileInView="active"
      className={styles.wrapperProjetos}
    >
      <div className={`${styles.projetos} container`}>
        <h1 className="title">Projects</h1>
        <Card
          title="Essencial Calçados"
          subtitle="Front end & UI Design"
          date="2022"
          image={require("../public/All-star.webp")}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem blanditiis quod nobis amet dolorum itaque at mollitia animi recusandae, necessitatibus a exercitationem minus, reiciendis quisquam nam et assumenda suscipit unde?"
          tecnologies={[
            "React",
            "Next.js",
            "Typescript",
            "GrapqQL",
            "HTML",
            "CSS",
          ]}
        />
        <Card
          title="Kairos"
          subtitle="Front/Back end & UI/UX Design"
          date="2021 - 2022"
          image={require("../public/Nike-Air-Force-2.webp")}
          description="Voluptatem blanditiis quod nobis amet dolorum itaque at mollitia animi recusandae, necessitatibus a exercitationem minus, reiciendis quisquam nam et assumenda suscipit unde?"
          tecnologies={["HTML", "CSS", "JavaScript", "PHP"]}
        />
      </div>
    </motion.div>
  );
};

export default Projetos;
