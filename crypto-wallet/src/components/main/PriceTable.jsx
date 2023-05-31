import styles from "./Table.module.css";

export default function PriceTable() {
  return (
    <table className={styles["container"]}>
      <thead>
        <tr>
          <th>Nosaukums</th>
          <th>Cena</th>
          <th>Izmaiņas (24h)</th>
          <th>Tirgus kap.</th>
          <th></th>
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
          <td>€ 20.32</td>
          <td>
          <div className={`${styles["imageCell"]} ${styles["green"]}`}>
              +0.46% <img src="../assets/icons/price_graph.png" />
            </div>
          </td>
          <td>€234.4M</td>
          <td>
            <div className={`${styles["imageCell"]} ${styles["blue"]}`}>
              Pirkt <img src="../assets/icons/star.png" />
            </div>
          </td>
        </tr>


        <tr>
          <td className={styles["imageCell"]}>
            <img src="../assets/coins/Xrp.png" alt="Xrp" />

            <div className={styles["details"]}>
              <h3>XRP</h3>
              <p>XRP</p>
            </div>
          </td>
          <td>€ 2.24</td>
          <td>
          <div className={`${styles["imageCell"]} ${styles["red"]}`}>
              -1.24% <img src="../assets/icons/graph_negative.png" />
            </div>
          </td>
          <td>€234.4M</td>
          <td>
            <div className={`${styles["imageCell"]} ${styles["blue"]}`}>
              Pirkt <img src="../assets/icons/star.png" />
            </div>
          </td>
        </tr>


        <tr>
          <td className={styles["imageCell"]}>
            <img src="../assets/coins/btc.png" alt="Bitcoin" />

            <div className={styles["details"]}>
              <h3>Bitcoin</h3>
              <p>BTC</p>
            </div>
          </td>
          <td>€ 24.802.32</td>
          <td>
          <div className={`${styles["imageCell"]} ${styles["green"]}`}>
              +4.98% <img src="../assets/icons/price_graph.png" />
            </div>
          </td>
          <td>€234.4M</td>
          <td>
            <div className={`${styles["imageCell"]} ${styles["blue"]}`}>
              Pirkt <img src="../assets/icons/star.png" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
