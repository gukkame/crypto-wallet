import styles from "@/styles/Home.module.css";
import icons from "@/styles/Icons.module.css";

export default function SectionSix() {
  return (
    <section className={styles["section-blog"]}>
      <div className={styles["title-container"]}>
        <h1 className={styles["title-left"]}>Apmācības</h1>
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
        <div className={styles["field2"]}>
      
            <div className={styles["imageWrapper"]}>
              <img
                className={styles["image-blog-1"]}
                src="../assets/home/section_6/study_blog_1.png"
                alt="study_blog_1"
              />
              <div className={styles["image-gradiant"]} />
              <div className={styles["card-text-container"]}>
                <h3>Kā iegādāties NFT?</h3>
                <br />
                <p>
                  Īss darba sākšanas ceļvedis savu sapņu digitālā kolekcionējamā
                  materiāla iegūšanai
                </p>
              </div>
            </div>
   
        </div>
        <div className={styles["field3"]}>
      
            <div className={styles["imageWrapper"]}>
            <img
                className={styles["image-blog-1"]}
                src="../assets/home/section_6/study_blog_2.png"
                alt="study_blog_2"
              />
              <div className={styles["image-gradiant"]} />
              <div className={styles["card-text-container"]}>
                <h3>Kā sākt veidot uzrkājumus un pelnīt ar to?</h3> <br />
                <p>
                  Pieci no labākajiem veidiem, kā palielināt savu kriptovalūtu,
                  sākot no ieguldīšanas līdz kreditēšanai
                </p>
              </div>
         
          </div>
        </div>
      </div>
    </section>
  );
}
