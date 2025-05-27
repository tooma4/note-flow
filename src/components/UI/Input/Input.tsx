import React from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";
import SearchLogo from "../../../assets/images/searchIcon.svg?react";
import { IInputProps } from "../../../components/Input/types";

export const InputUI = ({ theme = "light", variant }: IInputProps) => {
  return (
    <div className={clsx(styles.input_container)}>
      {variant === "search" ? (
        <>
          <SearchLogo className={clsx(styles.icon, styles[`icon_${theme}`])} />
          <input
            className={clsx(
              styles.input,
              styles[`input_${theme}`],
              styles[`input_${variant}`]
            )}
            type="text"
            placeholder="Найти задачу"
          />
        </>
      ) : (
        variant === "modal" && (
          <input
            className={clsx(
              styles.input,
              styles[`input_${theme}`],
              styles[`input_${variant}`]
            )}
            type="text"
            placeholder="Введите имя задачи"
          />
        )
      )}
    </div>
  );
};
