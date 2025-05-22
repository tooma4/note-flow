import React from "react";
import { IButtonProps } from "../../Button/types";
import styles from "./Button.module.scss";
import clsx from "clsx";

export const ButtonUI = ({
  type = "button",
  text,
  textSelect,
  icon,
  iconOpened,
  iconClosed,
  color = "primary",
  variant = "none",
  isOpen,
  options,
  handleSelect,
  onClick,
}: IButtonProps) => {
  return (
    <>
      <button
        className={clsx(styles.button, styles[color], styles[variant])}
        type={type}
        onClick={onClick}
      >
        {(text || textSelect) && (
          <span className={styles.spanText}>{text || textSelect}</span>
        )}

        <span className={styles.spanIcon} data-testid="button-icon">
          {isOpen ? iconOpened : iconClosed}
        </span>

        {icon && <span className={styles.spanIcon}>{icon}</span>}
        {isOpen && (
          <ul className={styles.dropdownMenu}>
            {options?.map((option) => (
              <li
                key={option}
                className={styles.dropdownItem}
                onClick={() => handleSelect?.(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </button>
    </>
  );
};
