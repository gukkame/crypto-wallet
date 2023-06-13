import styles from "@/styles/SideNav.module.css";
import navBar from "@/styles/NavBar.module.css";
import { isLoggedIn } from "../modules/localStorage";
import { removeUser } from "../modules/localStorage";
import { useState, useEffect } from "react";

export default function SideNavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openCloseNav = (event) => {
    event.preventDefault();
    if (isNavOpen) {
      document.getElementById("mySidenav").style.width = "3.125rem";
      document.getElementById("main").style.marginLeft = "3.125rem";
      setIsNavOpen(false);
    } else {
      document.getElementById("mySidenav").style.width = "14rem";
      document.getElementById("main").style.marginLeft = "14rem";
      setIsNavOpen(true);
    }
  };


  return (
    <>
      <div
        id="mySidenav"
        className={isNavOpen ? styles["sidenav"] : styles["sidenavClosed"]}
      >
        <a className={styles["closebtn"]} onClick={openCloseNav}>
          &times;
        </a>
        <section>
          <a href="http://localhost:3000/">
            <div className={styles["link"]}>
              <img
                src="../assets/icons/main_page/home_icon.png"
                alt="home"
                className={styles["icons"]}
              ></img>
              <h3>Galvenā</h3>
            </div>
          </a>
          <a href="#">
            <div className={styles["link"]}>
              <img
                src="../assets/icons/main_page/clock.png"
                alt="clock"
                className={styles["icons"]}
              ></img>
              <h3>Vēsture</h3>
            </div>
          </a>
          <a href="#">
            <div className={styles["link"]}>
              <img
                src="../assets/icons/main_page/settings.png"
                alt="setting"
                className={styles["icons"]}
              ></img>
              <h3>Iestatījumi</h3>
            </div>
          </a>{" "}
        </section>
        <section>
          <a href="#">
            <div className={styles["link"]}>
              <img
                src="../assets/icons/main_page/study.png"
                alt="clock"
                className={styles["icons"]}
              ></img>
              <h3>Mācības</h3>
            </div>
          </a>
          <a href="#">
            <div className={styles["link"]}>
              <img
                src="../assets/icons/main_page/about_us.png"
                alt="clock"
                className={styles["icons"]}
              ></img>
              <h3>Par Mums</h3>
            </div>
          </a>
          <a href="#">
            <div className={styles["link"]}>
              <img
                src="../assets/icons/main_page/news.png"
                alt="clock"
                className={styles["icons"]}
              ></img>
              <h3>Jaunumi</h3>
            </div>
          </a>
          <a href="/">
            <button
              className={navBar["button-login"]}
              onClick={removeUser}
            >
              Iziet
            </button>
          </a>
        </section>
      </div>
    </>
  );
}
