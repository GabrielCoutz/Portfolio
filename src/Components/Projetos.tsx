import React from "react";
import styles from "../styles/Projetos.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
import { wrapperVariant } from "./UiElements/FramerMotion/ProjetosVariants";
import Subtitle from "./Subtitle";

const Projetos = () => {
  return (
    <motion.div
      variants={wrapperVariant}
      whileInView="active"
      className={styles.wrapperProjetos}
    >
      <div className={`${styles.projetos} container`}>
        <Subtitle>Feitos com muito carinho</Subtitle>
        <h1 className="title">Alguns dos meus projetos</h1>
        <div className={styles.cards}>
          <Card
            title="Essencial Calçados"
            subtitle="Front end & UI Design"
            date="2022"
            image={require("../public/image.webp")}
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
            image={require("../public/img-projeto.png")}
            description="Voluptatem blanditiis quod nobis amet dolorum itaque at mollitia animi recusandae, necessitatibus a exercitationem minus, reiciendis quisquam nam et assumenda suscipit unde?"
            tecnologies={["HTML", "CSS", "JavaScript", "PHP"]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Projetos;
