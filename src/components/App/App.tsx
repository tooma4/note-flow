import styles from "./App.module.scss";
import { Header } from "../Header/Header";
import { mockData } from "../Header/mockData";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header {...mockData}>
        <div>Компонент 1</div>
        <div>Компонент 2</div>
        <div>Компонент 3</div>
      </Header>
    </div>
  );
}

export default App;
