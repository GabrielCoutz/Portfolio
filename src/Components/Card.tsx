import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import {
  imageVariant,
  listVariant,
  spanVariant,
  variantsProjetos,
} from "./UiElements/FramerMotion/ProjetosVariants";

interface CardModel {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  description: string;
  tecnologies: string[];
}

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
      variants={variantsProjetos}
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

export default Card;
