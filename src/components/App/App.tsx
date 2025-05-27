import styles from "./App.module.scss";
import { Header } from "../Header/Header";
import { mockData } from "../Header/mockData";
import { Button } from "../Button/Button";
import {
  toogleLightIcon,
  toogleDarkIcon,
  chevronClosedIcon,
  chevronOpendIcon,
} from "../Button/mockData";
import { Input } from "../Input/Input";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const themeToggleIcon = theme === "light" ? toogleDarkIcon : toogleLightIcon;

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(`${theme}`);
  }, [theme]);

  return (
    <div className={styles.appContainer}>
      <Header theme={theme} {...mockData}>
        <Input variant="search" theme={theme} />
        <Button
          theme={theme}
          variant="text_and_icon"
          textSelect="Все"
          iconOpened={chevronOpendIcon}
          iconClosed={chevronClosedIcon}
          options={["Все", "Завершенные", "Не завершенные"]}
        />
        <Button
          theme={theme}
          variant="theme"
          icon={themeToggleIcon}
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
      </Header>
    </div>
  );
}

export default App;
