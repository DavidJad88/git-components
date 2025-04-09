import styles from "./App.module.css";
import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/AccordionItem/AccordionItem";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div className={styles.rootContainer}>
      {/* <Button></Button> */}
      {/* <Counter /> */}
      {/* <Input
        placeholder="Please Enter your first name"
        label="First Name"
        errorMessage="First Name is required"
      ></Input> */}
      {/* <Accordion /> */}
      <Spinner />
    </div>
  );
}

export default App;
