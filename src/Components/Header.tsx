import React from "react";
import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.wrapperHeader}>
      <header className={`${styles.header} container`}>
        <div className={styles.logo}>G. Coutinho</div>
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
