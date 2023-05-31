//Main page, when user is logged in
import SideNavBar from "../components/SideNavBar";
import PortfTable from "../components/main/PortfolioTable";
import PriceTable from "../components/main/PriceTable";
import HistoryTable from "../components/main/HistoryTable";
import styles from "@/styles/Main.module.css";

export default function Main() {
  return (
    <>
      <SideNavBar />
      <div id="main" className={styles["main"]}>
        <h2>Atlikums</h2>
        <div className={styles["wrapper"]}>
          <div className={styles["balance-frame"]}>
            <div className={styles["current-balance"]}>
              <h3>€ &nbsp;&nbsp; &nbsp; 4,200.00 </h3>
            </div>
            <div className={styles["buttons"]}>
              <button>Pirkt</button>
              <button>Pārdot</button>
            </div>
          </div>
          <div>
            <h2>
              <i> &nbsp;Graph</i>
            </h2>
          </div>
        </div>

        <h2>Portfolio</h2>
        <PortfTable />
        <h2>Cenas</h2>
        <PriceTable />
        <h2>Vēsture</h2>
        <HistoryTable />
        <h2>Jaunumi</h2>
      </div>
    </>
  );
}
