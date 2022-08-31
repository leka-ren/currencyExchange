import axios from "axios";

export const currencyApi = (
  amount: string | number,
  from: string,
  to: string
) => {
  return axios(`fetch("https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}
    `);
};
