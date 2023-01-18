import React from "react";
import styles from "../styles/Projetos.module.css";
import { AnimateSharedLayout, motion } from "framer-motion";
import Card from "./Card";
import { wrapperVariant } from "./UiElements/FramerMotion/ProjetosVariants";
import Subtitle from "./Subtitle";

const Projetos = () => {
  return (
    <motion.div
      variants={wrapperVariant}
      whileInView="active"
      className={styles.wrapperProjetos}
      layout
    >
      <motion.div layout className={`${styles.projetos} container`}>
        <Subtitle>Feitos com muito carinho</Subtitle>
        <h1 className="title">Alguns dos meus projetos</h1>
        <AnimateSharedLayout>
          <motion.ul className={styles.cards} layout>
            <Card
              image={require("../public/essencial.png")}
              title="Essencial Calçados"
              subtitle="Front end & UI Design"
              repositoryLink="https://github.com/GabrielCoutz/essencial-calcados"
              siteLink="https://essencial-calcados.vercel.app/"
              date="2022"
              description="Pequeno e-commerce de calçados
              importados. Desenvolvido utilizando
              DatoCMS para gestão de
              conteúdo. Atuo como front-end e UI/UX
              designer, construindo-o no Figma e
              transformando em código posteriormente."
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
              image={require("../public/kairos.png")}
              title="Kairos"
              subtitle="Front/Back end & UI/UX Design"
              date="2021 - 2022"
              repositoryLink="https://github.com/GabrielCoutz/Kairos-v2"
              siteLink="https://gabrielcoutz.github.io/Kairos-v2.github.io/"
              description="Plataforma de gestão de marketing
              desenvolvida para apresentação do meu TCC.
              Atuei como front & back, desenvolvendo-a
              dos wireframes, ao código."
              tecnologies={["HTML", "CSS", "JavaScript", "PHP"]}
            />
          </motion.ul>
        </AnimateSharedLayout>
      </motion.div>
    </motion.div>
  );
};

export default Projetos;
