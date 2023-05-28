import styles from "@/styles/Home.module.css";
import icons from "@/styles/Icons.module.css";

export default function SectionFive() {
  return (
    <section className={styles["section-blog"]}>
      <div className={styles["title-container"]}>
        <h1 className={styles["title-left"]}>Jaunumi</h1>
        <div className={styles["title-right"]}>
          <p>Vairāk</p>
          <img
            src="../assets/icons/arrow.png"
            alt="Arrow img"
            className={icons["arrow"]}
          />
        </div>
      </div>

      <div className={styles["container-flex"]}>
        <div className={styles["field1"]}>
          <div className={styles["imageWrapper"]}>
            <img
              className={styles["image-news-1"]}
              src="../assets/home/section_5/news_1.png"
              alt="news_1"
            />
            <div className={styles["image-gradiant"]}></div>
            <div className={styles["titleContainer"]}>
              <h3 className={styles["card-text-container"]}>
                16. maijā, Eiropadomes locekļi nobalsoja par MiCA kriptovalūtu
                tirgus regulējuma stāšanos spēkā Eiropas Savienībā
              </h3>
            </div>
          </div>
        </div>
        <div className={styles["field2"]}>
          <div className={styles["imageWrapper"]}>
            <img
              className={styles["image-news-2"]}
              src="../assets/home/section_5/news_2.png"
              alt="news_2"
            />
            <div className={styles["image-gradiant"]}> </div>
            <h3 className={styles["card-text-container"]}>
              Elon Musk Meme tvīts izraisa Milady NFT cenu gandrīz dubultā
            </h3>
          </div>
        </div>
        <div className={styles["field3"]}>
          <div className={styles["imageWrapper"]}>
            <img
              className={styles["image-news-2"]}
              src="../assets/home/section_5/news_3.png"
              alt="news_3"
            />
            <div className={styles["image-gradiant"]}></div>
            <h3 className={styles["card-text-container"]}>
              Ethereum uzkrāšana piedzīvo rekordaugstu iknedēļas pieplūdumu
              vairāk nekā 1 miljarda ASV dolāru vērtībā - kas notiks tālāk ar
              ETH cenu?
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
