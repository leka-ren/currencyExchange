import { ComponentType } from "react";

import styles from "./TextInput.module.css";

type TextInputProps = {
  handler: (e: React.FormEvent<HTMLInputElement>) => void;
};
export const TextInput: ComponentType<TextInputProps> = ({ handler }) => {
  return <input onChange={handler} type="number" className={styles.input} />;
};
