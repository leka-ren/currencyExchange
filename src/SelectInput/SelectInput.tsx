import { useStore } from "effector-react";
import { ComponentType } from "react";
import { $currencys } from "./SelectInput.model";

import styles from "./SelectInput.module.css";

interface SelectInputProps {
  handler: (currency: string) => void;
}

export const SelectInput: ComponentType<SelectInputProps> = ({ handler }) => {
  const currencys = useStore($currencys);

  const onChangeHandler = (e: any) => {
    handler(e.target.value);
  };

  return (
    <select
      className={styles.select}
      onChange={onChangeHandler}
      name="currencys"
      id="currencys"
      defaultValue={"choose"}
    >
      <option value={"choose"} disabled>
        Валюта
      </option>
      {currencys.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};
