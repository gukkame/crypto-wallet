import { useState } from "react";
import styles from "@/styles/Auth.module.css";
import Link from "next/link";

export default function SecretForm({ onData }) {
  const handleSubmit = (data) => {
    onData(data);
  };

  return (
    <div className={styles["login-form"]}>
      <h2> Tava slepenā frāze </h2>
      <div className={`${styles["line-row"]} ${styles["secret-line"]}`}>
        <div className={styles["line-on"]}></div>
        <br></br>
        <div className={styles["line-on"]}></div>
        <div className={styles["line-off"]}></div>
      </div>
      <div className={styles["secret-form-container"]}>
        <p>
          Pieraksti savu slepeno frāzi un uzglabā to drošā vietā. Tā atļaus tev
          atjaunot aizmirsušos paroli un piekļūt savam makam.
        </p>
        <div className={styles["grid-container"]}>
          <div className={styles["grid-item"]}>1. Zaķis </div>
          <div className={styles["grid-item"]}>2. Kartupelis </div>
          <div className={styles["grid-item"]}>3. Jelgava </div>
          <div className={styles["grid-item"]}>4. Suns </div>
          <div className={styles["grid-item"]}>5. Krūze </div>
          <div className={styles["grid-item"]}>6. Logs </div>
          <div className={styles["grid-item"]}>7. Mans </div>
          <div className={styles["grid-item"]}>8. Lapa </div>
          <div className={styles["grid-item"]}>9. Braukt </div>
          <div className={styles["grid-item"]}>10. Lekt </div>
          <div className={styles["grid-item"]}>11. Māja </div>
          <div className={styles["grid-item"]}>12. Sarkans </div>
        </div>
      </div>
      <div className={styles["secret-phrase-warning"]}>
        <h4>Mēs nesaglabājam tavu SLEPENO FRĀZI!</h4>
      </div>
      <div className={styles["secret-form-container"]}>
        <button
          className={`${styles["form-input"]} ${styles["secret-btn"]}`}
          type="submit"
          onClick={() => handleSubmit("secret-test")}
        >
          Turpināt
        </button>
        <button
          className={`${styles["form-input"]} ${styles["back-btn"]}`}
          type="submit"
          onClick={() => handleSubmit("register")}
        >
          Atpakaļ
        </button>
      </div>
    </div>
  );
}
