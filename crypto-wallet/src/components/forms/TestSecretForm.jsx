import styles from "@/styles/Auth.module.css";

export default function TestSecretForm({ onData }) {
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
        <p>Pārbaudīsim!</p>
        <div className={styles["custom-list"]}>
          <div>
            <ul>
            <li className={styles["list-item"]}>
                5. <input
                  type="text"
                  className={styles["dotted-underline"]}
                  placeholder="Field 1"
                />
              </li>
              <li className={styles["list-item"]}>
                11.<input
                  type="text"
                  className={styles["dotted-underline"]}
                  placeholder="Field 2"
                />
              </li>
              <li className={styles["list-item"]}>
                3.<input
                  type="text"
                  className={styles["dotted-underline"]}
                  placeholder="Field 3"
                />
              </li>
              <li className={styles["list-item"]}>
                8.
                <input
                  type="text"
                  className={styles["dotted-underline"]}
                  placeholder="Field 4"
                />
              </li>
            </ul>
          </div>
        </div>
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
          onClick={() => handleSubmit("secret")}
        >
          Atpakaļ
        </button>
      </div>
    </div>
  );
}
