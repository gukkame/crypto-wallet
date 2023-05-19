import Link from "next/link";
import {
  getDataFromLocalStorage,
  setDataInLocalStorage,
} from "../../modules/localStorage";
import { useState } from "react";

import styles from "@/styles/Auth.module.css";

export default function LogInForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.email == "" || state.password == "") {
      console.log("Email/Password is missing");
      return;
    }
    getDataFromLocalStorage(state.email, state.password);
  };

  return (
    <div className={`${styles.formContainer}`}>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.form_input_wrapper}`}>
          <i className={`${styles.formMailIcon}`}></i>
          <input
            type="text"
            name="email"
            placeholder="Epasts"
            value={state.email}
            onChange={handleInputChange}
            className={`${styles.formInput}`}
          />
        </div>

        <div className={`${styles.form_input_wrapper}`}>
          <i className={`${styles.formMailIcon}`}></i>
          <input
            type="password"
            name="password"
            placeholder="Parole"
            value={state.password}
            onChange={handleInputChange}
            className={`${styles.formInput}`}
          />
          <i className={`${styles.formEyeIcon}`}></i>
        </div>
        <p> Aizmirsāt paroli?</p>

        <button className={styles["formInput"]} type="submit">
          Turpināt
        </button>
      </form>
    </div>
  );
}
