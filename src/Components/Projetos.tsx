import Image from "next/image";
import React from "react";
import styles from "../styles/Projetos.module.css";
import { motion, Variants } from "framer-motion";

interface CardModel {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  description: string;
  tecnologies: string[];
}

const variants: Variants = {
  default: {
    opacity: 0,
    scale: 0,
  },
  active: {
    opacity: 1,
    scale: 1,
    animation: "animacao 1s infinite alternate",
  },
  hover: {
    animation: "none",
    transition: {
      type: "spring",
      duration: 0.7,
      delayChildren: 0.1,
    },
    scale: 1.1,
  },
};

const spanVariant: Variants = {
  default: {
    opacity: 0,
    transform: "translateY(200px)",
  },
  hover: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      delayChildren: 0.1,
    },
    transform: "translateY(0px)",
  },
};

const imageVariant: Variants = {
  default: {
    filter: "none",
  },
  hover: {
    filter: "blur(2px)",
    scale: 0.95,
  },
};

const listVariant: Variants = {
  default: {
    transform: "translateY(-200px)",
  },
  hover: {
    transform: "translateY(0px)",
  },
};

const Card = ({
  image,
  title,
  subtitle,
  date,
  description,
  tecnologies,
}: CardModel) => {
  return (
    <motion.div
      className={styles.card}
      variants={variants}
      initial="default"
      whileInView="active"
      whileHover="hover"
    >
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.date}>{date}</h3>
      <div className={styles.details}>
        <motion.span variants={spanVariant}>{description}</motion.span>
        <motion.ul className={styles.tecnologias} variants={listVariant}>
          {tecnologies.map((tecnologie) => (
            <motion.li key={Math.random()}>{tecnologie}</motion.li>
          ))}
        </motion.ul>
        <motion.div variants={imageVariant}>
          <Image src={image} width={300} height={300} alt={title} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const wrapperVariant: Variants = {
  active: {
    transitionDuration: "3s",
    color: "rgb(255, 255, 255)",
  },
};

const Projetos = () => {
  return (
    <motion.div
      variants={wrapperVariant}
      whileInView="active"
      className={styles.wrapperProjetos}
    >
      <div className={`${styles.projetos} container`}>
        <h1 className="title">Projetos</h1>
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
