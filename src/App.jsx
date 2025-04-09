import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className={styles.rootContainer}>
      {/* <Button></Button> */}
      {/* <Counter /> */}
      <Input
        placeholder="Please Enter your first name"
        label="First Name"
        errorMessage="First Name is required"
      ></Input>
    </div>
  );
}

export default App;
