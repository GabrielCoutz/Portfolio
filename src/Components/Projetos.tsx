import Image from "next/image";
import React from "react";
import styles from "../styles/Projetos.module.css";
import { motion, Variants } from "framer-motion";

interface CardModel {
  title: string;
  subtitle: string;
  image: string;
  date: string;
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
      bounce: 0.7,
      duration: 0.7,
    },
    scale: 1.1,
  },
};

const Card = ({ image, title, subtitle, date }: CardModel) => {
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
      <motion.span style={{ display: "none" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et
        reiciendis rerum repellendus magnam eligendi corrupti architecto ad
        tempore dolorum? Facilis iure saepe ut sapiente adipisci minus harum!
        Est, quam.
      </motion.span>
      <div>
        <Image src={image} width={300} height={300} alt={title} />
      </div>
    </motion.div>
  );
};

const Projetos = () => {
  return (
    <div className={`${styles.projetos} container`}>
      <h1 className="title">Projetos</h1>
      <Card
        title="Essencial Calçados"
        subtitle="Front end & UI Design"
        date="2022"
        image={require("../public/All-star.webp")}
      />
      <Card
        title="Kairos"
        subtitle="Front/Back end & UI/UX Design"
        date="2021 - 2022"
        image={require("../public/Nike-Air-Force-2.webp")}
      />
    </div>
  );
};

export default Projetos;
