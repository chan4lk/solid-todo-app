import logo from "./logo.svg";
import styles from "./App.module.css";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
