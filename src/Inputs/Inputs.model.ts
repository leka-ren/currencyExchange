import { createDomain, sample } from "effector";
import { getCurrencyExchange } from "../api/exchangeCurrencyMiddleware";

// Domain
export const inputsDomain = createDomain();

// Events
export const setFromCurrencyExchange = inputsDomain.createEvent<string>();
export const setToCurrencyExchange = inputsDomain.createEvent<string>();
export const setExchangeValue = inputsDomain.createEvent<string>();
export const submitHandler = inputsDomain.createEvent();

// Store
export const $fromCurrencyExchange = inputsDomain
  .createStore<string>("")
  .on(setFromCurrencyExchange, (_, value) => value);

export const $toCurrencyExchange = inputsDomain
  .createStore<string>("")
  .on(setToCurrencyExchange, (_, value) => value);

export const $exchangeValue = inputsDomain
  .createStore("")
  .on(setExchangeValue, (_, value) => value);

// Relation

sample({
  clock: submitHandler,
  source: {
    from: $fromCurrencyExchange,
    to: $toCurrencyExchange,
    amound: $exchangeValue,
  },
  fn: (src, _) => {
    return src;
  },
  filter: (src) => !!src.amound.length && !!src.from.length && !!src.to.length,
  target: getCurrencyExchange,
});
