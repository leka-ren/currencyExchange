import { createDomain } from "effector";

// Domain
export const inputsDomain = createDomain();

// Events
export const setFromCurrencyExchange = inputsDomain.createEvent<string>();
export const setToCurrencyExchange = inputsDomain.createEvent<string>();

// Store
export const fromCurrencyExchange = inputsDomain.createStore<string>("");
export const toCurrencyExchange = inputsDomain.createStore<string>("");
