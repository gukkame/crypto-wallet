import styles from "@/styles/Home.module.css";
import auth from "@/styles/Auth.module.css";
import icons from "@/styles/Icons.module.css";

export default function Home() {
  return (
    <div className={styles["background-image"]}>
      <section className={styles["section-one"]}>
        <div className={`${styles.element} ${styles.container}`}>
          <h1>Uzticamākā Kriptovalūtas Platforma</h1>
       
          <h2>
            CryptoCabata ir vienkāršākā vieta, kur pirkt un pārdot kriptovalūtu.
            Reģistrējieties un sāciet jau šodien.
          </h2>   <br></br>
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
            <button type="submit" className={styles["button"]}>Pierakstīties</button>
          </div>
          <br></br>
          <h2>Seko mums</h2>
          <br>
          </br>
          <i className={icons["telegram"]}></i>
          <i className={icons["twitter"]}></i>
          <i className={icons["linkedin"]}></i>
        </div>
        <div className={styles["element"]}>
          element2
          <div className={styles["coins"]}></div>
        </div>
      </section>
      <section className={styles["section-two"]}>
        <h2>hey</h2>
      </section>
    </div>
  );
}
