import { useState } from "react";
import styles from "@/styles/Auth.module.css";
import Link from "next/link";

export default function SecretForm() {
  return (
    <div className={styles["login-form"]}>
      <h2> Tava slepenā frāze </h2>
      <div className={styles["line-row"]}>
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
        <div className={styles["grid-item"]}>Name 1 (ID 1)</div>
        <div className={styles["grid-item"]}>Name 2 (ID 2)</div>
        <div className={styles["grid-item"]}>Name 3 (ID 3)</div>
        <div className={styles["grid-item"]}>Name 4 (ID 4)</div>
        <div className={styles["grid-item"]}>Name 5 (ID 5)</div>
        <div className={styles["grid-item"]}>Name 6 (ID 6)</div>
        <div className={styles["grid-item"]}>Name 7 (ID 7)</div>
        <div className={styles["grid-item"]}>Name 8 (ID 8)</div>
        <div className={styles["grid-item"]}>Name 9 (ID 9)</div>
        <div className={styles["grid-item"]}>Name 10 (ID 10)</div>
        <div className={styles["grid-item"]}>Name 11 (ID 11)</div>
        <div className={styles["grid-item"]}>Name 12 (ID 12)</div>
      </div>
      </div>
    </div>
  );
}
