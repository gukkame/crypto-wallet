import styles from "@/styles/Home.module.css";

export default function SectionThree() {
  return (
    <section className={styles["section-three"]}>
      <h1>Uzticamākā Kriptovalūtas Platforma</h1>

      <div className={styles["card-container"]}>
        <div className={styles["card"]}>
          <img
            className={styles["card-image"]}
            src="../assets/home/section_3/lock.png"
            alt="lock"
          />
          <h3 className={styles["title"]}>Droša Uzglabāšana</h3>
          <p className={styles["text"]}>
            Lielāko daļu digitālo līdzekļu mēs glabājam drošā bezsaistes
            krātuvē.
          </p>
        </div>
        <div className={styles["card"]}>
          <img
            className={styles["card-image"]}
            src="../assets/home/section_3/eth-front.png"
            alt="eth"
          />
          <h3 className={styles["title"]}>Droša Uzglabāšana</h3>
          <p className={styles["text"]}>
            Lielāko daļu digitālo līdzekļu mēs glabājam drošā bezsaistes
            krātuvē.
          </p>
        </div>
        <div className={styles["card"]}>
          <img
            className={styles["card-image"]}
            src="../assets/home/section_3/shield-front.png"
            alt="shield"
          />
          <h3 className={styles["title"]}>Droša Uzglabāšana</h3>
          <p className={styles["text"]}>
            Lielāko daļu digitālo līdzekļu mēs glabājam drošā bezsaistes
            krātuvē.
          </p>
        </div>
        <div className={styles["card"]}>
          <img
            className={styles["card-image"]}
            src="../assets/home/section_3/copy-front.png"
            alt="copy"
          />
          <h3 className={styles["title"]}>Droša Uzglabāšana</h3>
          <p className={styles["text"]}>
            Lielāko daļu digitālo līdzekļu mēs glabājam drošā bezsaistes
            krātuvē.
          </p>
        </div>
      </div>
    </section>
  );
}
