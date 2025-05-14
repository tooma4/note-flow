import type { IHeaderProps } from "./types";
import { HeaderUI } from "../UI/Header/Header";

export const Header = (props: IHeaderProps) => {
  return <HeaderUI {...props} />;
};
