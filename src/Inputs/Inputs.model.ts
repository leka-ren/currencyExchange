import { createDomain } from "effector";

// Domain
export const inputsDomain = createDomain();

// Events
export const setFromCurrencyExchange = inputsDomain.createEvent<string>();
export const setToCurrencyExchange = inputsDomain.createEvent<string>();
export const setExchangeValue = inputsDomain.createEvent<string>();
export const submit = inputsDomain.createEvent<string>();

// Store
export const fromCurrencyExchange = inputsDomain
  .createStore<string>("")
  .on(setFromCurrencyExchange, (_, value) => value);

export const toCurrencyExchange = inputsDomain
  .createStore<string>("")
  .on(setToCurrencyExchange, (_, value) => value);

export const exchangeValue = inputsDomain
  .createStore("")
  .on(setExchangeValue, (_, value) => value);
