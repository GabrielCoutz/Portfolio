import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import { variantsProjetos } from "./UiElements/FramerMotion/ProjetosVariants";
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
  const [active, setActive] = React.useState(false);
  return (
    <motion.li
      className={`${styles.card} ${active && styles.active}`}
      variants={variantsProjetos}
      initial="default"
      whileInView="active"
      whileHover="hover"
      onClick={() => setActive(!active)}
      layout
    >
      <motion.h3 layout className={styles.subtitle}>
        {subtitle}
      </motion.h3>
      <motion.h1 layout className={styles.title}>
        {title}
      </motion.h1>
      <motion.h3 layout className={styles.date}>
        {date}
      </motion.h3>
      <motion.div layout className={styles.icons}>
        {repositoryLink && (
          <motion.a
            layout
            href={repositoryLink}
            target="_blank"
            rel="noreferrer"
          >
            <GithubLined />
          </motion.a>
        )}
        {siteLink && (
          <motion.a layout href={siteLink} target="_blank" rel="noreferrer">
            <ExternalLink />
          </motion.a>
        )}
      </motion.div>
      <AnimatePresence>
        {active && (
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.description}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default Card;
