import { ComponentType } from "react";
import { Header } from "../Header/Header";
import { Inputs } from "../Inputs/Inputs";
import { Resault } from "../Resault/Resault";

import styles from "./General.module.css";

export const General: ComponentType = () => {
  return (
    <div className={styles.content}>
      <Header />
      <Inputs />
      <Resault />
    </div>
  );
};
