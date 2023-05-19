import Link from "next/link";
import LogInForm from "@/components/forms/LoginForm";
import styles from "@/styles/Auth.module.css";

export default function LogInPage() {
  return (
    //className={`${styles.main}`}
    <div className={`${styles.loginForm}`}>
      <h2> Autorizēties </h2>
      <LogInForm />

      <h4>
        Nav sava konta? <Link href={`/signup`}>Izveido jaunu </Link>
      </h4>
    </div>
  );
}
