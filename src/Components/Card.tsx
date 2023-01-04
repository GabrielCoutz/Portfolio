import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import {
  listVariant,
  spanVariant,
  variantsProjetos,
} from "./UiElements/FramerMotion/ProjetosVariants";
import ExternalLink from "./UiElements/Svg/ExternalLink";
import GithubLined from "./UiElements/Svg/GithubLined";

interface CardModel {
  title: string;
  subtitle: string;
  // image: string;
  date: string;
  description: string;
  tecnologies: string[];
  repositoryLink?: string;
  siteLink?: string;
}

function handleClick({ currentTarget }: any) {
  if (currentTarget instanceof HTMLDivElement)
    currentTarget.classList.toggle(styles.active);
  else console.log("djisafod");
}

const Card = ({
  // image,
  title,
  subtitle,
  date,
  description,
  tecnologies,
  siteLink,
  repositoryLink,
}: CardModel) => {
  return (
    <motion.div
      className={styles.card}
      variants={variantsProjetos}
      initial="default"
      whileInView="active"
      whileHover="hover"
      onClick={handleClick}
    >
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.date}>{date}</h3>
      <div className={styles.icons}>
        {repositoryLink && (
          <a href={repositoryLink} target="_blank" rel="noreferrer">
            <GithubLined />
          </a>
        )}
        {siteLink && (
          <a href={siteLink} target="_blank" rel="noreferrer">
            <ExternalLink />
          </a>
        )}
      </div>
      {/* <div className={styles.details}> */}
      {/* <motion.span variants={spanVariant}>{description}</motion.span> */}
      {/* <motion.ul className={styles.tecnologias} variants={listVariant}>
          {tecnologies.map((tecnologie) => (
            <motion.li key={Math.random()}>{tecnologie}</motion.li>
          ))}
        </motion.ul> */}
      {/* <motion.div variants={imageVariant}>
          <Image src={image} width={300} height={300} alt={title} />
        </motion.div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Card;
