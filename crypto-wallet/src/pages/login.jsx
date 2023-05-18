import Link from "next/link";
import styles from '@/styles/Home.module.css'
import LogInForm from "@/components/forms/LoginForm";


export default function LogInPage() {
    return (
        <div className={`${styles.main}`}>
            <LogInForm />
            <Link href={`/`}>
                <button>Return to Home page</button>
            </Link>
        </div>
    );
}
