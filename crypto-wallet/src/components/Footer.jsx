import styles from "@/styles/Footer.module.css";
import Link from "next/link";
// import icons from "@/styles/Icons.module.css"; neņem no šejienes


export default function Footer() {
  return (
    <div className={styles["container"]}>
      <div className={styles["logo"]}></div>
      <div className={styles["follow-us"]}>
      <Link href="/">
      <h2>Seko mums</h2>
        </Link>
        <div className={styles["instagram"]}></div>
        <div className={styles["facebook"]}></div>
        <div className={styles["telegram"]}></div>
        <div className={styles["twitter"]}></div>
        <div className={styles["linkedin"]}></div>
      </div>
      <div className={styles["policy"]}>
      <Link href="/">
      <h2>Sākums</h2>
        </Link>
        <Link href="/">
      <h2>Par mums</h2>
        </Link>
        <Link href="/">
      <h2>Jaunumi</h2>
        </Link>
        <Link href="/">
      <h2>Mācības</h2>
        </Link>
      </div>
      <div className={styles["policy"]}>
      <Link href="/">
      <h2>Juridiskā sadaļa & Privātums</h2>
        </Link>
        <Link href="/">
      <h2>Sīkdatņu politika</h2>
        </Link>
        <Link href="/">
      <h2>Sīkfailu preferences</h2>
        </Link>
        <Link href="/">
      <h2>Digitālo aktīvu atklāšana</h2>
        </Link>
      </div>
      <div className={styles["autortiesibas"]}><h2>Autortiesības 2023 © CryptoCabata</h2>
</div>
    </div>
    
    
  );
}
