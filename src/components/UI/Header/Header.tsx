import type { IHeaderProps } from "../../Header/types";
import styles from "../../ui/Header/Header.module.scss";

export const HeaderUI = ({ title, children }: IHeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <div className={styles.headerChildren}>{children}</div>
    </div>
  );
};
