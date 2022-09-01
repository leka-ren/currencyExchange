import axios from "axios";

interface GetCurrencyExchangeArgs {
  from: string;
  to: string;
  amound: string | number;
}
const apiCurrencyExchange = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amound}`;
const apikey = "yI56o6WgSS0IloSAKUMQfchgfmeIHSsX";

export const getCurrencyExchange = ({
  from,
  to,
  amound,
}: GetCurrencyExchangeArgs) => {
  return axios(apiCurrencyExchange, {
    headers: {
      apikey,
    },
  });
};
