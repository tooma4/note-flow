import { useState } from "react";
import { ButtonUI } from "../UI/Button/Button";
import { IButtonProps } from "./types";

export const Button = (props: IButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const handleSelect = (option: string) => {
    setText(option);
    setIsOpen(false);
  };
  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    console.log("Смена темы");
  };

  const deleteTask = () => {
    console.log("Удаление");
  };

  const editTask = () => {
    console.log("Редактирование");
  };

  const addTask = () => {
    console.log("Открытие формы для добавления task");
  };

  const handlers: Record<string, (() => void) | undefined> = {
    text_and_icon: toggleDropdown,
    delete: deleteTask,
    edit: editTask,
    theme: toggleTheme,
    add: addTask,
    none: () => {},
  };

  const clickHandler = handlers[props.variant ?? "none"] ?? props.onClick;

  return (
    <ButtonUI
      isOpen={isOpen}
      text={text}
      handleSelect={handleSelect}
      onClick={clickHandler}
      {...props}
    />
  );
};
