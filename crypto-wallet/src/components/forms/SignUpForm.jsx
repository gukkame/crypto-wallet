import { setDataInLocalStorage } from "@/modules/localStorage";
import { useState, useEffect } from "react";
import styles from "@/styles/Auth.module.css";
import Link from "next/link";

export default function SignUpForm({ onData }) {
  const [rulesChecked, setChecked] = useState(false);
  const [passChecked, setPassChecked] = useState(true);

  useEffect(() => {
    console.log(rulesChecked);
  }, [rulesChecked]);

  const [state, setState] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      state.email == "" ||
      state.password == "" ||
      state.passwordRepeat == ""
    ) {
      setPassChecked(false);
      console.log("Email/Password is missing");
      return;
    } else if (state.password != state.passwordRepeat) {
      setPassChecked(false);
      console.log("Passwords are not equal");
      return;
    } else if (
      state.password == state.passwordRepeat &&
      state.email != "" &&
      rulesChecked == false
    ) {
      setPassChecked(true);
      console.log(
        "Passwords are equal and email is there as well. Rules are not approved"
      );
      return;
    } else if (
      state.password == state.passwordRepeat &&
      state.email != "" &&
      rulesChecked == true
    ) {
      setPassChecked(true);
      console.log("Passwords are equal, email ok and rules are approved");
    }
    setDataInLocalStorage(state.email, state.password);
    console.log("User saved succesfully!");
    onData("true");
  };

  return (
    <>
      <div className={styles["loginForm"]}>
        <h2> Reģistrēties </h2>
        <div className={styles["line-row"]}>
          <div className={styles["line-on"]}></div>
          <br></br>
          <div className={styles["line-off"]}></div>
          <div className={styles["line-off"]}></div>
        </div>

        <div className={styles["formContainer"]}>
          <form onSubmit={handleSubmit}>
            <div className={styles["form_input_wrapper"]}>
              <i className={styles["formMailIcon"]}></i>
              <input
                type="email"
                name="email"
                placeholder="Epasts"
                value={state.email}
                onChange={handleInputChange}
                className={`${styles.formInput}`}
              />
            </div>

            <div
              className={
                passChecked
                  ? styles["form_input_wrapper"]
                  : styles["form_input_wrapper_false"]
              }
            >
              <i className={styles["formLocked"]}></i>
              <input
                type="password"
                name="password"
                placeholder="Parole"
                value={state.password}
                onChange={handleInputChange}
                className={`${styles.formInput}`}
              />
              <i className={styles["formEyeIcon"]}></i>
            </div>

            <div
              className={
                passChecked
                  ? styles["form_input_wrapper"]
                  : styles["form_input_wrapper_false"]
              }
            >
              <i className={styles["formLocked"]}></i>
              <input
                type="password"
                name="passwordRepeat"
                placeholder="Parole atkārtoti"
                value={state.passwordRepeat}
                onChange={handleInputChange}
                className={`${styles.formInput}`}
              />
              <i className={styles["formEyeIcon"]}></i>
            </div>

            <button className={styles["formInput"]} type="submit">
              Turpināt
            </button>
          </form>
        </div>
        <p>
          Esi jau lietotājs? <Link href={`/login`}> Autorizējies </Link>
        </p>
        <div className={styles["rule_wrapper"]}>
          <input
            type="checkbox"
            checked={rulesChecked}
            onChange={handleChange}
          />
          &nbsp; &nbsp;
          <p className={rulesChecked ? "" : styles["rules"]}>
            Esmu izlasījis un piekrītu{" "}
            <Link href={`/terms-conditions`}> Crypto Cabata noteikumiem </Link>
          </p>
        </div>
      </div>
    </>
  );
}
