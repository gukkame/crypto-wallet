import styles from "@/styles/Footer.module.css";
import icons from "@/styles/Icons.module.css";
import Link from "next/link";
// import icons from "@/styles/Icons.module.css"; neņem no šejienes

export default function Footer() {
  return (
    <div className={styles["container"]}>
      <img
        src="../assets/logo-dark.png"
        alt="React Image"
        className={styles["logo"]}
      ></img>

      <div className={styles["follow-us"]}>
        <Link href="/">
          <h2>Seko mums</h2>
        </Link>
        <Link href="https://instagram.org/">
          <img
            src="../assets/icons/social_media/instagram.png"
            className={icons["social-media-icon"]}
          />
        </Link>{" "}
        <Link href="https://facebook.com/">
          <img
            src="../assets/icons/social_media/facebook.png"
            className={icons["social-media-icon"]}
          />
        </Link>
        <Link href="https://telegram.org/">
          <img
            src="../assets/icons/social_media/telegram.png"
            className={icons["social-media-icon"]}
          />
        </Link>
        <Link href="https://twitter.com/">
          <img
            src="../assets/icons/social_media/twitter.png"
            className={icons["social-media-icon"]}
          />
        </Link>
        <Link href="https://www.linkedin.com/">
          <img
            src="../assets/icons/social_media/linkedin.png"
            className={icons["social-media-icon"]}
          />
        </Link>
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
