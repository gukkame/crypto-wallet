import styles from "@/styles/SideNav.module.css";
import { useState } from "react";

export default function SideNavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    setIsNavOpen(true);
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("main").style.marginLeft = "50px";
    setIsNavOpen(false);
  };
  const openCloseNav = () => {
    if (isNavOpen) {
      document.getElementById("mySidenav").style.width = "50px";
      document.getElementById("main").style.marginLeft = "50px";
      setIsNavOpen(false);
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      setIsNavOpen(true);
    }
  };

  return (
    <>
      <div
        id="mySidenav"
        className={isNavOpen ? styles["sidenav"] : styles["sidenavClosed"]}
      >
        <a
          href="javascript:void(0)"
          className={styles["closebtn"]}
          onClick={openCloseNav}
        >
          &times;
        </a>
        <br></br>
        <a href="#"><img src="../"></img>About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      {/* <button onClick={openNav}>open</button>{" "} */}
    </>
  );
}
