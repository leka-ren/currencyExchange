import { ComponentType } from "react";

import styles from "./TextInput.module.css";

type TextInputProps = {
  handler: (sum: string) => void;
};
export const TextInput: ComponentType<TextInputProps> = () => {
  return <input type="number" className={styles.input} />;
};
