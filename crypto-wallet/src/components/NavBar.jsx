import styles from "@/styles/NavBar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import { isLoggedIn } from "../modules/localStorage";

export default function NavBar() {
  const [userIsLoggedIn, setIsLoggedIn] = useState(false);
  const [url, setURL] = useState("a");

  useEffect(() => {
    let currentUrl = window.location.href;
    setURL(currentUrl);

    if (isLoggedIn()) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {!userIsLoggedIn && url == "http://localhost:3000/" ? (
        <section className={styles["container"]}>
          <img
            src="../assets/logo-dark.png"
            alt="React Image"
            className={styles["logo"]}
          ></img>

          <div className={styles["nav-menu"]}>
            <Link href="/">
              <h2>Par mums</h2>
            </Link>
            <Link href="/">
              <h2>Jaunumi</h2>
            </Link>
            <Link href="/">
              <h2>Mācības</h2>
            </Link>
          </div>
          <div className={styles["button-menu"]}>
            <Link href="/login">
              <button className={styles["button-login"]}>Ienākt</button>
            </Link>
            <Link href="/signup">
              <button className={styles["button-signup"]}>Reģistrēties</button>
            </Link>
          </div>
        </section>
      ) : !userIsLoggedIn && url == "http://localhost:3000/login" ? (
        <section className={styles["container-auth"]}>
          <img
            src="../assets/logo-dark.png"
            alt="React Image"
            className={styles["logo"]}
          ></img>
          <div className={styles["button-menu"]}>
            <Link href="/signup">
              <button className={styles["button-signup"]}>Reģistrēties</button>
            </Link>
          </div>
        </section>
      ) : !userIsLoggedIn && url == "http://localhost:3000/signup" ? (
        <section className={styles["container-auth"]}>
          <img
            src="../assets/logo-dark.png"
            alt="React Image"
            className={styles["logo"]}
          ></img>
          <div className={styles["button-menu"]}>
            <Link href="/login">
              <button className={styles["button-login"]}>Ienākt</button>
            </Link>
          </div>
        </section>
      ) : (
        <> </>
      )}
    </>
  );
}
