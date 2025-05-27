import React from "react";
import { InputUI } from "../UI/Input/Input";
import { IInputProps } from "./types";

export const Input = (props: IInputProps) => {
  return <InputUI theme={props.theme} variant={props.variant} />;
};
