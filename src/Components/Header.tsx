import React from "react";
import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.wrapperHeader}>
      <header className={`${styles.header} container`}>
        <span>G. Coutinho</span>
        <a href="#contato" className={styles.link}>
          Contato
        </a>
      </header>
    </div>
  );
};

export default Header;
