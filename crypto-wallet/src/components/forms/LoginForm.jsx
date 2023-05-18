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
        <div className={`${styles.formInput}`}>
      
          <i className={`${styles.formInputIcon}`}></i>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.formInput}`}>
          <label>Password</label>
   
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div type="submit" className={`${styles.formInput}`}>
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
