//Main page, when user is logged in
import SideNavBar from "../components/SideNavBar";
import PortfTable from "../components/main/PortfolioTable";
import PriceTable from "../components/main/PriceTable";
import HistoryTable from "../components/main/HistoryTable";
import styles from "@/styles/Main.module.css";
import home from "@/styles/Home.module.css";
import icons from "@/styles/Icons.module.css";
import table from "../components/main/Table.module.css";

export default function Main() {
  return (
    <>
      <SideNavBar />
      <div id="main" className={styles["main"]}>
        <h2>Atlikums</h2>
        <div className={styles["wrapper"]}>
          <div className={styles["balance-frame"]}>
            <div className={styles["current-balance"]}>
              <h3>€ &nbsp;&nbsp; &nbsp; 4,200.00 </h3>
            </div>
            <div className={styles["buttons"]}>
              <button>Pirkt</button>
              <button>Pārdot</button>
            </div>
          </div>
          <div>
            <h2>
              <i> &nbsp;Graph</i>
            </h2>
          </div>
        </div>

        <h2>Portfolio</h2>
        <PortfTable />

        <div className={home["title-container"]}>
          <h2 className={home["title-left"]}>Cenas</h2>
          <div className={home["title-right"]}>
            <p className={table["blue"]}>Skatīt vairāk</p>
            <img
              src="../assets/icons/arrow.png"
              alt="Arrow img"
              className={icons["arrow"]}
            />
          </div>
        </div>
        <PriceTable />

        <div className={home["title-container"]}>
          <h2 className={home["title-left"]}>Vēsture</h2>
          <div className={home["title-right"]}>
            <p className={table["blue"]}>Skatīt vairāk</p>
            <img
              src="../assets/icons/arrow.png"
              alt="Arrow img"
              className={icons["arrow"]}
            />
          </div>
        </div>
        <HistoryTable />

        <section className={styles["section-news"]}>
          <div className={home["title-container"]}>
            <h1 className={home["title-left"]}>Jaunumi</h1>
            <div className={home["title-right"]}>
              <p className={table["blue"]}>Vairāk</p>
              <img
                src="../assets/icons/arrow.png"
                alt="Arrow img"
                className={icons["arrow"]}
              />
            </div>
          </div>
          <br />
          <div className={home["container-flex"]}>
            <div className={home["imageWrapper"]}>
              <img
                className={home["image-blog-1"]}
                src="../assets/home/section_5/news_1.png"
                alt="study_blog_1"
              />
              <div className={home["image-gradiant"]} />
              <div className={home["card-text-container"]}>
                <h3>
                  Pavasaris kausē kriptoziemu un ceļ digitālo monētu vērtību
                </h3>
              </div>
            </div>

            <div className={home["imageWrapper"]}>
              <img
                className={home["image-blog-1"]}
                src="../assets/home/section_5/news_2.png"
                alt="study_blog_2"
              />
              <div className={home["image-gradiant"]} />
              <div className={home["card-text-container"]}>
                <h3>Andrejostā tapusi Latvijā pirmā NFT galerija</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
