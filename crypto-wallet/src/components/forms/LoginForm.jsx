import Link from "next/link";
import {
  checkLogIn,
} from "../../modules/localStorage";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "@/styles/Auth.module.css";
import icons from "@/styles/Icons.module.css";

export default function LogInForm() {
  const router = useRouter();
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
    if (checkLogIn(state.email, state.password)) {
      router.push(`/${state.email}`);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-input-wrapper"]}>
          <i className={icons["form-mail-icon"]}></i>
          <input
            type="text"
            name="email"
            placeholder="Epasts"
            value={state.email}
            onChange={handleInputChange}
            className={styles["form-input"]}
          />
        </div>

        <div className={styles["form-input-wrapper"]}>
          <i className={icons["form-locked-icon"]}></i>
          <input
            type="password"
            name="password"
            placeholder="Parole"
            value={state.password}
            onChange={handleInputChange}
            className={styles["form-input"]}
          />
          <i className={icons["form-eye-icon"]}></i>
        </div>
        <p> Aizmirsāt paroli?</p>

        <button className={styles["form-input"]} type="submit">
          Turpināt
        </button>
      </form>
    </div>
  );
}
