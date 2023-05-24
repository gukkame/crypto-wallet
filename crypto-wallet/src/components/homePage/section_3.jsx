import styles from "@/styles/Home.module.css";

export default function SectionThree() {
  return (
    <section className={styles["section-three"]}>
      <div className={styles["container"]}>
      <br />
        <h1>Uzticamākā Kriptovalūtas Platforma</h1>
      </div>

      <div className={styles["card-container"]}>
        <div className={styles["card"]}>
          <div className={styles["image-lock"]} />
          <h3 className={styles["title"]}>Droša Uzglabāšana</h3>
          <p className={styles["text"]}>
            Lielāko daļu digitālo līdzekļu mēs glabājam drošā bezsaistes
            krātuvē.
          </p>
        </div>
        <div className={styles["card"]}>
          <div className={styles["image-eth"]} />
          <h3 className={styles["title"]}>Droša Uzglabāšana</h3>
          <p className={styles["text"]}>
            Lielāko daļu digitālo līdzekļu mēs glabājam drošā bezsaistes
            krātuvē.
          </p>
        </div>
        <div className={styles["card"]}>
          <div className={styles["image-sheild"]} />
          <h3 className={styles["title"]}>Droša Uzglabāšana</h3>
          <p className={styles["text"]}>
            Lielāko daļu digitālo līdzekļu mēs glabājam drošā bezsaistes
            krātuvē.
          </p>
        </div>
        <div className={styles["card"]}>
          <div className={styles["image-copy"]} />
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
