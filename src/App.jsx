import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className={styles.rootContainer}>
      {/* <Button></Button> */}
      <Counter />
    </div>
  );
}

export default App;
