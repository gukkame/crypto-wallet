//Main page, when user is logged in
import SideNavBar from "../components/SideNavBar";
import styles from "@/styles/SideNav.module.css";

export default function Main() {
  return (
    <>
      <SideNavBar />
      <div id="main"className={styles["main"]}>
        <h2>Main page</h2>
      </div>
    </>
  );
}
