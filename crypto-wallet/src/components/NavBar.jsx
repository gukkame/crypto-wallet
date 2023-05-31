import styles from "@/styles/NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <section className={styles["container"]}>
      <div className={styles["logo"]}></div>
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
      <div className={styles["menu-icon solid"]}></div>
      <div className={styles["menu-icon close"]}></div>
      <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    return (
                        <li key={index}>
                            <a className={styles["nav-menu"]} href={item.url}>
                            {item.h2}
                            </a>
                        </li>
                    )
            </ul>

    </section>
  );
}
