import { ComponentType } from "react";

type TextInputProps = {
  handler: (sum: string) => void;
};
export const TextInput: ComponentType<TextInputProps> = () => {
  return <input />;
};
