import { ComponentType } from "react";

import styles from "./SelectInput.module.css";

interface SelectInputProps {
  handler: (currency: string) => void;
  revers?: boolean;
}

export const SelectInput: ComponentType<SelectInputProps> = ({
  handler,
  revers = false,
}) => {
  const currencyNames = revers
    ? ["USD", "EUR", "GBP", "CNY", "RUB"].reverse()
    : ["USD", "EUR", "GBP", "CNY", "RUB"];

  const onChangeHandler = (e: any) => {
    handler(e.target.value);
  };

  return (
    <select
      className={styles.select}
      onChange={onChangeHandler}
      name="currencys"
      id="currencys"
    >
      {currencyNames.map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};
