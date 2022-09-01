import { ComponentType } from "react";
import styles from "./Header.module.css";

export const Header: ComponentType = () => {
  return (
    <header onClick={() => window.location.reload()} className={styles.content}>
      <h1 className={styles.title}>Конвертер Валют</h1>
    </header>
  );
};
