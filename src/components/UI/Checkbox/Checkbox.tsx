import React from "react";
import clsx from "clsx";
import styles from "./Checkbox.module.scss";

export const CheckboxUI = () => {
  return (
    <label className={styles.checkbox_container}>
      <input className={clsx(styles.visually_hidden)} type="checkbox" />
      <span className={styles.checkbox}></span>
    </label>
  );
};
