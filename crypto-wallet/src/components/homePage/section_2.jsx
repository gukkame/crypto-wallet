import styles from "@/styles/Home.module.css";
import icons from "@/styles/Icons.module.css";

import Link from "next/link";

export default function SectionTwo() {
  return (
    <section className={styles["section-two"]}>
      <div className={styles["element"]}>
        <img
          src="../assets//home/section_2/people-avatars-zoom-call.png"
          alt="People photo"
          className={styles["img-people"]}
        ></img>
      </div>
      <div className={`${styles.element} ${styles.container}`}>
        <h1>Par Mums</h1>
        <p>
          Mēs veidojam kriptoekonomiku – godīgāku, pieejamāku, efektīvāku un
          pārskatāmāku finanšu sistēmu, ko nodrošina kriptovalūta.
          <br />
          <br />
          Mēs sākām 2023. gadā ar radikālu ideju, ka ikvienam un jebkurā vietā
          vajadzētu būt iespējai viegli un droši nosūtīt un saņemt kriptovalūtu.
          Šodien mēs piedāvājam uzticamu un viegli lietojamu platformu, lai
          piekļūtu plašākai kriptoekonomikai.
        </p>
        <br />
        <br />
        <Link href={`/`} className={styles["read-more"]}>
          Lasīt vairāk
          <img
            src="../assets/icons/arrow.png"
            alt="Arrow img"
            className={icons["arrow"]}
          />
        </Link>
      </div>
    </section>
  );
}
