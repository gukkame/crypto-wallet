import styles from "./Table.module.css";

export default function HistoryTable() {
  return (
    <table className={styles["container"]}>
      <thead>
        <tr>
          <th>Nosaukums</th>
          <th>Laiks</th>
          <th>Tips(buy or sell)</th>
          <th>Komisijas maksa</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles["imageCell"]}>
            <img src="../assets/coins/sol.png" alt="Sol" />

            <div className={styles["details"]}>
              <h3>Solana</h3>
              <p>SOL</p>
            </div>
          </td>
          <td>24.05.2023 18:00 </td>

          <td>
            <div className={`${styles["green"]}`}>Pārdots</div>
          </td>
          <td>0.0000315</td>
          <td>€483.9B</td>
        </tr>
      </tbody>
    </table>
  );
}
