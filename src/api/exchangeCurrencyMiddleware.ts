import { createDomain, forward } from "effector";
import { getCurrencyExchangeApi } from "./currencyApi";

const exchangeMiddleware = createDomain();

// Event
export const getCurrencyExchange = exchangeMiddleware.createEvent();

// Effect
export const getCurrencyExchangeFx = exchangeMiddleware.createEffect(
  getCurrencyExchangeApi
);

// Store
export const $exchangeResult = exchangeMiddleware
  .createStore<string>("")
  .on(getCurrencyExchangeFx.doneData, (_, response) => response.data.result)
  .on(getCurrencyExchangeFx.fail, (_) => "Что-то пошло не так...");

forward({
  //@ts-ignore
  from: getCurrencyExchange,
  to: getCurrencyExchangeFx,
});
