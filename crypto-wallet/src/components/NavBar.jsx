import styles from "@/styles/NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
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
          <button className={styles["button-login"]}>Ienākt</button>{" "}
        </Link>
        <Link href="/signup">
          <button className={styles["button-signup"]}>Reģistrēties</button>{" "}
        </Link>
      </div>
    </section>
  );
}
