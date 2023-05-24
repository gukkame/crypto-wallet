import styles from "@/styles/Home.module.css";
import Link from "next/link";


export default function SectionFour() {
  return (
    <section className={styles["section-four"]}>
      <div className={styles["container"]}>
        <div className={styles["item"]}>
          <div className={styles["img-phone"]}></div>
        </div>

        <div className={styles["item"]}>
          <h1>Kā sākt?</h1>
          <h2>Veic savu pirmo darījumu, izpildot šīs vienkāršās darbības.</h2>
          <div className={styles["flexbox"]}>

            <div className={styles["field"]}>
              <div className={styles["card-horizontal"]}>
                <div
                  className={styles["mobile-front"]}
                />
                <div className={styles.content}>
                  <h3>Izveido kontu</h3>
                 
                  <br />
                  <p>Nospied pogu <Link href={`/signup`} >  Reģistrēties.</Link> Izpildi ekrānā redzamās darbības, lai iestatītu kontu.</p>
                </div>
              </div>
            </div>
            <div className={styles["field"]}>
              <div className={styles["card-horizontal"]}>
                <div
                  className={styles["wallet-front"]}
                />
                <div className={styles.content}>
                  <h3>Iemaksā līdzekļus kontā</h3>
                  <br />
                  <p>Ieskaiti savā kontā, lai sāktu tirgot kriptovalūtu. Līdzekļus kontā vari iemaksāt izmantojot dažādākās maksājumu metodes.</p>
                </div>
              </div>
            </div>
            <div className={styles["field"]}>
              <div className={styles["card-horizontal"]}>
                <div
                  className={styles["boy-front"]}
                />
                <div className={styles.content}>
                  <h3>Sāc tirdzniecību</h3>
                  <br />
                  <p>Veic identitātes verifikāciju, lai parūpētos par sava konta un darījumu drošību.</p>
                </div>
              </div>
            </div>
            <div className={styles["field"]}>
              <div className={styles["card-horizontal"]}>
                <div
                  className={styles["target-front"]}
                />
                <div className={styles.content}>
                  <h3>Izveido kontu</h3>
                  <br />
                  <p>Sāc tirdzniecību - Viss gatavs. Pērc, pārdod, uzkrāj, pelni.</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
