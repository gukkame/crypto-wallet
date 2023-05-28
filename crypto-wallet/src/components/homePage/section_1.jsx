import styles from "@/styles/Home.module.css";
import icons from "@/styles/Icons.module.css";
import Link from "next/link";

export default function SectionOne() {
  return (
    <section className={styles["section-one"]}>
      <div className={`${styles.element} ${styles.container}`}>
        <h1>Uzticamākā Kriptovalūtas Platforma</h1>
        <h2>
          CryptoCabata ir vienkāršākā vieta, kur pirkt un pārdot kriptovalūtu.
          Reģistrējieties un sāciet jau šodien.
        </h2>
        <br />
        <div className={styles["form-wrapper"]}>
          <div className={styles["form-input-wrapper"]}>
            <i className={icons["form-mail-icon"]}></i>
            <input
              type="text"
              name="email"
              placeholder="Epasts"
              className={styles["form-input"]}
            />
          </div>
          <button type="submit" className={styles["button"]}>
            Pierakstīties
          </button>
        </div>
        <br />
        <h2>Seko mums</h2>
        <br />
        <div className={styles["element"]}>
          <Link href="https://telegram.org/">
            <img
              src="../assets/icons/social_media/telegram.png"
              className={icons["telegram"]}
            />
          </Link>
          <Link href="https://twitter.com/">
            <img
              src="../assets/icons/social_media/twitter.png"
              className={icons["twitter"]}
            />
          </Link>
          <Link href="https://www.linkedin.com/">
            <img
              src="../assets/icons/social_media/linkedin.png"
              className={icons["linkedin"]}
            />
          </Link>
        </div>
      </div>
      <div className={styles["element"]}>
        <img
          src="../assets/home/section_1/coins.png"
          alt="Coin image"
          className={styles["img-coins"]}
        ></img>
      </div>
    </section>
  );
}
