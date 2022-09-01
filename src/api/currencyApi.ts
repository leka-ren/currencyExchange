import axios from "axios";
import { GetCurrencyExchangeArgs } from "./currencyApi.types";

const apikey1 = "yI56o6WgSS0IloSAKUMQfchgfmeIHSsX";
// const apikey2 = "szQlT3tQR759gAI62kw9GwwhW1O1KST4s";

export const getCurrencyExchangeApi = ({
  from,
  to,
  amound,
}: GetCurrencyExchangeArgs) => {
  const apiCurrencyExchange = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amound}`;
  return axios(apiCurrencyExchange, {
    headers: {
      apikey: apikey1,
    },
  });
};
