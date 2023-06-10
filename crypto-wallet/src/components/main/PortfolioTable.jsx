import styles from "./Table.module.css";

export default function PortfolioTable() {
  return (
    <table className={styles["container"]}>
      <thead>
        <tr>
          <th>Nosaukums</th>
          <th>Vienības</th>
          <th>Atlikums</th>
          <th>Sadalījums</th>
          <th>Izmaiņas (24h)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles["imageCell"]}>
            <img src="../assets/coins/fiat.png" alt="Fiat" />

            <div className={styles["details"]}>
              <h3>Fiat</h3>
              <p>EUR</p>
            </div>
          </td>
          <td> </td>
          <td>€27,857</td>
          <td>35%</td>
          <td>
          
          </td>
        </tr>

        <tr>
          <td className={styles["imageCell"]}>
            <img src="../assets/coins/btc.png" alt="Fiat" />
            <div className={styles["details"]}>
              <h3>Bitcoin</h3>
              <p>BTC</p>
            </div>
          </td>
          <td>0.25 BTC</td>
          <td>€483.9B</td>
          <td>28%</td>
          <td>
          <div className={`${styles["imageCell"]} ${styles["green"]}`}>
              +10.21% <img src="../assets/icons/price_graph.png" />
            </div>
          </td>
        </tr>

        <tr>
          <td className={styles["imageCell"]}>
            <img src="../assets/coins/bnb.png" alt="Fiat" />
            <div className={styles["details"]}>
              <h3>BNB</h3>
              <p>BNB</p>
            </div>
          </td>
          <td>0.25 BNB</td>
          <td>€483.9B</td>
          <td>43%</td>
          <td>
          <div className={`${styles["imageCell"]} ${styles["green"]}`}>
              +2.43% <img src="../assets/icons/price_graph.png" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
