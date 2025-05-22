import styles from "./App.module.scss";
import { Header } from "../Header/Header";
import { mockData } from "../Header/mockData";
import { Button } from "../Button/Button";
import {
  toogleLightIcon,
  chevronClosedIcon,
  chevronOpendIcon,
} from "../Button/mockData";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header {...mockData}>
        <div>Компонент 1</div>
        <Button
          variant="text_and_icon"
          textSelect="Все"
          iconOpened={chevronOpendIcon}
          iconClosed={chevronClosedIcon}
          options={["Все", "Завершенные", "Не завершенные"]}
        />
        <Button variant="theme" icon={toogleLightIcon} />
      </Header>
    </div>
  );
}

export default App;
