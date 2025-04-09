import spinnerStyles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={spinnerStyles.spinnerContainer}>
      <div
        className={`${spinnerStyles.spinnerCircle} ${spinnerStyles.spinnerClassName}`}
      ></div>
    </div>
  );
}

export default Spinner;
