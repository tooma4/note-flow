import type { IHeaderProps } from "../../Header/types";
import clsx from "clsx";
import styles from "../../ui/Header/Header.module.scss";

export const HeaderUI = ({ title, children, theme }: IHeaderProps) => {
  return (
    <div className={`${styles.headerContainer}`}>
      <h1 className={clsx(styles.headerTitle, styles[`headerTitle_${theme}`])}>
        {title}
      </h1>
      <div className={styles.headerChildren}>{children}</div>
    </div>
  );
};
