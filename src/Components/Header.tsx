import React from "react";
import styles from "../styles/Header.module.css";

interface HeaderModel {
  current: HTMLHeadElement | undefined;
}

function headerExists(obj: any): obj is HeaderModel {
  return !!(obj && obj.current);
}

const Header = () => {
  const headerBar = React.useRef<HTMLHeadElement>(null);

  function showScroll() {
    if (!headerExists(headerBar)) return;

    const scroll = window.scrollY;

    if (scroll >= 50) headerBar.current.classList.add(styles.minifed);
    else headerBar.current.classList.remove(styles.minifed);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", showScroll);
    showScroll();
    return () => window.removeEventListener("scroll", showScroll);
  }, []);

  return (
    <div className={styles.wrapperHeader}>
      <header className={`${styles.header} container`} ref={headerBar}>
        <span>G.Coutinho</span>
        <a href="#contato" className={styles.link}>
          Contato
        </a>
      </header>
    </div>
  );
};

export default Header;
