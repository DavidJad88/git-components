import inputStyles from "./Input.module.css";

function Input({
  label,
  type = "text",
  value,
  placeholder = "",
  className,
  id,
  errorMessage,
  onChange,
  onKeyDown,
}) {
  return (
    <>
      {label && (
        <label htmlFor={id} className={inputStyles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`${inputStyles.input} ${className}`}
      />
      {errorMessage && <p className={inputStyles.errorText}>{errorMessage}</p>}
    </>
  );
}

export default Input;
