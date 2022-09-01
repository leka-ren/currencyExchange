import axios from "axios";

interface GetCurrencyExchangeArgs {
  from: string;
  to: string;
  amound: string | number;
}
const apikey1 = "yI56o6WgSS0IloSAKUMQfchgfmeIHSsX";
// const apikey2 = "szQlT3tQR759gAI62kw9GwwhW1O1KST4s";

export const getCurrencyExchange = ({
  from,
  to,
  amound,
}: GetCurrencyExchangeArgs) => {
  const apiCurrencyExchange = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amound}`;
  return axios(apiCurrencyExchange, {
    headers: {
      apikey1,
    },
  });
};
