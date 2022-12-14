import { ComponentType } from "react";
import { SelectInput } from "../SelectInput/SelectInput";
import { TextInput } from "../TextInput/TextInput";
import {
  setExchangeValue,
  setFromCurrencyExchange,
  setToCurrencyExchange,
  submitHandler,
} from "./Inputs.model";
import styles from "./Inputs.module.css";

export const Inputs: ComponentType = () => {
  const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setExchangeValue(event.currentTarget.value || "");
  };
  return (
    <div className={styles.content}>
      <div className={styles.selectInputs}>
        <div className={styles.inputGroupContent}>
          <p className={styles.text}>Из: </p>
          <SelectInput handler={setFromCurrencyExchange} />
        </div>
        <div className={styles.inputGroupContent}>
          <p className={styles.text}>В:</p>
          <SelectInput handler={setToCurrencyExchange} />
        </div>
      </div>
      <div>
        <TextInput handler={inputHandler} />
        <button
          onClick={() => {
            submitHandler();
          }}
          className={styles.button}
        >
          клик
        </button>
      </div>
    </div>
  );
};
