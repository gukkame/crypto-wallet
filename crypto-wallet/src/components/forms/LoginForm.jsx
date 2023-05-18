import Link from "next/link";
import {
  getDataFromLocalStorage,
  setDataInLocalStorage,
} from "../../modules/localStorage";
import { useState } from "react";

import styles from "@/styles/Login.module.css";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
