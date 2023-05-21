import styles from "@/styles/Auth.module.css";
import Link from "next/link";

export default function EndOfSignUp({ onData }) {
  const handleSubmit = (data) => {
    onData(data);
  };

  return (
    <div className={styles["login-form"]}>
      <h2> Reģistrēties </h2>
      <div className={`${styles["line-row"]} ${styles["secret-line"]}`}>
        <div className={styles["line-on"]}></div>
        <br></br>
        <div className={styles["line-on"]}></div>
        <div className={styles["line-on"]}></div>
      </div>
      <div className={styles["congratulation"]}>
        <h2>Apsveicam!</h2>
        <p>Tavs jaunais kriptovalūtas maks ir gatavs</p>
      </div>

      <div className={styles["secret-form-container"]}>
        <Link href={`/`}>
          <button className={`${styles["form-input"]}`} type="submit">
            Turpināt
          </button>
        </Link>
      </div>
    </div>
  );
}
