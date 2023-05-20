import { useState } from "react";
import styles from "@/styles/Auth.module.css";
import Link from "next/link";

export default function SecretForm() {
  return (
    <div className={styles["loginForm"]}>
      <h2> Tava slepenā frāze </h2>
      <div className={styles["line-row"]}>
        <div className={styles["line-on"]}></div>
        <br></br>
        <div className={styles["line-off"]}></div>
        <div className={styles["line-off"]}></div>
      </div>
      <div className={styles["formContainer"]}>
        <p>
          Pieraksti savu slepeno frāzi un uzglabā to drošā vietā. Tā atļaus tev
          atjaunot aizmirsušos paroli un piekļūt savam makam.
        </p>
      </div>
    </div>
  );
}
