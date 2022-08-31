import { createDomain } from "effector";

const inputDomain = createDomain();

// Event
export const setInput = inputDomain.createEvent;
