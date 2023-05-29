import Link from "next/link";
import LogInForm from "@/components/forms/LoginForm";
import styles from "@/styles/Auth.module.css";
import NavBar from "../components/NavBar";

export default function LogInPage() {
  return (
    <>
      <NavBar />
      <div className={styles["login-form"]}>
        <h2> Autorizēties </h2>
        <LogInForm />
        <p>
          Nav sava konta? <Link href={`/signup`}>Izveido jaunu </Link>
        </p>
      </div>{" "}
    </>
  );
}
