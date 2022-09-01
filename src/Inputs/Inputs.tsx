import { ComponentType } from "react";
import { SelectInput } from "../SelectInput/SelectInput";
import styles from "./Inputs.module.css";

export const Inputs: ComponentType = () => {
  return (
    <div className={styles.content}>
      <div className={styles.inputGroupContent}>
        <p className={styles.text}>Из: </p>
        <SelectInput handler={(currency: string) => console.log(currency)} />
      </div>
      <div className={styles.inputGroupContent}>
        <p className={styles.text}>В:</p>
        <SelectInput
          revers={true}
          handler={(currency: string) => console.log(currency)}
        />
      </div>
    </div>
  );
};
