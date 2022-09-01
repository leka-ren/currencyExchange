import { useStore } from "effector-react";
import { ComponentType } from "react";
import { $exchangeResult } from "../api/exchangeCurrencyMiddleware";

export const Resault: ComponentType = () => {
  const exchangeResult = useStore($exchangeResult);

  return (
    <div>
      <p>{exchangeResult}</p>
    </div>
  );
};
