import { createDomain } from "effector";

const selectInputDomain = createDomain();

// Events
export const setCurrentCurrency = selectInputDomain.createEvent();

// Store
export const $currencys = selectInputDomain.createStore([
  "USD",
  "EUR",
  "GBP",
  "CNY",
  "RUB",
]);
