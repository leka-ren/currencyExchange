import { useStore } from "effector-react";
import { ComponentType } from "react";
import { $exchangeResult } from "../api/exchangeCurrencyMiddleware";
import { $toCurrencyExchange } from "../Inputs/Inputs.model";

import styles from "./Resault.module.css";

export const Resault: ComponentType = () => {
  const exchangeResult = useStore($exchangeResult);
  const currency = useStore($toCurrencyExchange);

  return exchangeResult ? (
    <p className={styles.textContent}>
      {exchangeResult} {currency}
    </p>
  ) : (
    <></>
  );
};
