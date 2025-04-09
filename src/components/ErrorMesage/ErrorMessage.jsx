import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message, errorLogo }) {
  return (
    <div className={styles.errorContainer}>
      <span>{errorLogo}</span>
      <p className={styles.errorText}>{message}</p>
    </div>
  );
}

export default ErrorMessage;
