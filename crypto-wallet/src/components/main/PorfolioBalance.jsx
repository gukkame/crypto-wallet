import styles from "@/styles/Main.module.css";

export default function PortfolioBalance() {
  return (
    <div className={styles["graph"]}>
      <select>
        <option selected> Diena</option>
        <option>Nedēļa</option>
        <option>Mēnesis</option>
      </select>

      <img src="../assets/main/balance_graph.png" alt="graph"></img>
      <img src="../assets/main/weekdays.png" alt="weekdays"></img>
    </div>
  );
}
