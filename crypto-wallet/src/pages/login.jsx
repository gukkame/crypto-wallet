import Link from "next/link";
import LogInForm from "@/components/forms/LoginForm";
import styles from "@/styles/Auth.module.css";

export default function LogInPage() {
  return (
    //className={`${styles.main}`}
    <div className={`${styles.loginForm}`}>
      <h2> Sveiks, esi gatavs darboties? </h2>
      <h3> Autorizēties </h3>
      <LogInForm />
      <Link href={`/`}>
        <button>Return to Home page</button>
      </Link>
    </div>
  );
}
