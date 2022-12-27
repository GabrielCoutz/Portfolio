import Image from "next/image";
import React from "react";
import styles from "../styles/Projetos.module.css";

interface CardModel {
  title: string;
  subtitle: string;
  image: string;
  date: string;
}

const Card = ({ image, title, subtitle, date }: CardModel) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.date}>{date}</h3>
      <div>
        <Image src={image} width={300} height={300} alt={title} />
      </div>
    </div>
  );
};

const Projetos = () => {
  return (
    <div className={`${styles.projetos} container`}>
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
      <Card
        title="Kairos"
        subtitle="Front/Back end & UI/UX Design"
        date="2021 - 2022"
        image={require("../public/All-star.webp")}
      />
      <Card
        title="Kairos"
        subtitle="Front/Back end & UI/UX Design"
        date="2021 - 2022"
        image={require("../public/Nike-Air-Force-2.webp")}
      />
      <Card
        title="Kairos"
        subtitle="Front/Back end & UI/UX Design"
        date="2021 - 2022"
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
