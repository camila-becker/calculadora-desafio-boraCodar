import { useState, FormEvent } from "react";
import styles from "./Calculator.module.css";

export function Calculator() {
  const [oldNumber, setOldNumber] = useState(0);
  const [number, setNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);

  function handleOperation(event: FormEvent<HTMLButtonElement>) {
    const { name } = event.target as HTMLButtonElement;
    setOperator(name);
    setOldNumber(Number(number));
    setNumber("");
  }

  function handleInputNumber(event: FormEvent<HTMLButtonElement>) {
    const { name } = event.target as HTMLButtonElement;
    if (number === "0") {
      setNumber(name);
    } else {
      setNumber(number.concat(name));
    }
  }

  function clear() {
    setNumber("");
    setResult(0);
  }

  function backspace() {
    setNumber(number.slice(0, -1));
    setResult(0);
  }

  function percentage() {
    const result = Number(number) / 100;
    setNumber(result.toString());
  }

  function changeSign() {
    const negativeNumber = -Number(number);
    const absoluteNumber = Math.abs(Number(number));

    Number(number) > 0
      ? setNumber(negativeNumber.toString())
      : setNumber(absoluteNumber.toString());
  }

  function calculate() {
    switch (operator) {
      case "x":
        return setResult(oldNumber * Number(number));
      case "÷":
        return setResult(oldNumber / Number(number));
      case "-":
        return setResult(oldNumber - Number(number));
      case "+":
        return setResult(oldNumber + Number(number));
      case "%":
        return setResult(Number(number) / 100);
    }
  }

  return (
    <>
      <div className={styles.calculator}>
        <div className={styles.screen}>
          <input className={styles.operation} value={number} readOnly />
          <div className={styles.resultContainer}>
            <span className={styles.result}>{result}</span>
          </div>
        </div>
        <div className={styles.keypad}>
          <button
            name="clear"
            onClick={clear}
            className={`${styles.key} ${styles["secondary"]} ${styles["bg-primary"]}`}
          >
            CE
          </button>
          <button
            name="backspace"
            onClick={backspace}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            C
          </button>
          <button
            name="%"
            onClick={calculate}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            %
          </button>
          <button
            name="/"
            onClick={handleOperation}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-secondary"]}`}
          >
            ÷
          </button>
          <button
            name="7"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            7
          </button>
          <button
            name="8"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            8
          </button>
          <button
            name="9"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            9
          </button>
          <button
            name="*"
            onClick={handleOperation}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-secondary"]}`}
          >
            x
          </button>
          <button
            name="4"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            4
          </button>
          <button
            name="5"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            5
          </button>
          <button
            name="6"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            6
          </button>
          <button
            name="-"
            onClick={handleOperation}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-secondary"]}`}
          >
            -
          </button>
          <button
            name="1"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            1
          </button>
          <button
            name="2"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            2
          </button>
          <button
            name="3"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            3
          </button>
          <button
            name="+"
            onClick={handleOperation}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-secondary"]}`}
          >
            +
          </button>
          <button
            name="+/-"
            onClick={changeSign}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            +/-
          </button>
          <button
            name="0"
            onClick={handleInputNumber}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            0
          </button>
          <button
            name="."
            onClick={handleOperation}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-primary"]}`}
          >
            ,
          </button>
          <button
            name="Enter"
            onClick={calculate}
            className={`${styles.key} ${styles["primary"]} ${styles["bg-light"]}`}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
