import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function AuthInput(props: Props) {
  return <input {...props} />;
}
