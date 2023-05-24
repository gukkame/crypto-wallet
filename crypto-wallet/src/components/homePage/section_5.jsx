import styles from "@/styles/Home.module.css";

export default function SectionFive() {
  return (
    <section className={styles["section-five"]}>
      <h1>Jaunumi</h1>
      <div className={styles["container-five"]}>
        <div className={styles["field1"]}>
          <div className={styles["card-five"]}>
            <div className={styles["imageWrapper-five"]}>
              <div className={styles["image-news-1"]} />
              <div className={styles["gradient-five"]}></div>
              <h3 className={styles["title-five"]}>
                16. maijā, Eiropadomes locekļi nobalsoja par MiCA kriptovalūtu
                tirgus regulējuma stāšanos spēkā Eiropas Savienībā
              </h3>
            </div>
          </div>
        </div>
        <div className={styles["field2"]}>
          <div className={styles["card-five"]}>
            <div className={styles["imageWrapper-five"]}>
              <div className={styles["image-news-2"]} />
              <div className={styles["gradient-five"]}>
                <h3 className={styles["title-five"]}>
                  Elon Musk Meme tvīts izraisa Milady NFT cenu gandrīz dubultā
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["field3"]}>
          <div className={styles["card-five"]}>
            <div className={styles["imageWrapper-five"]}>
              <div className={styles["image-news-3"]} />
              <div className={styles["gradient-five"]}></div>
              <h3 className={styles["title-five"]}>
                Ethereum uzkrāšana piedzīvo rekordaugstu iknedēļas pieplūdumu
                vairāk nekā 1 miljarda ASV dolāru vērtībā - kas notiks tālāk ar
                ETH cenu?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
