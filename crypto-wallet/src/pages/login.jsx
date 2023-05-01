import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function LogInPage() {
    return (
        <>
            <Link className={`${styles.main}`} href={`/`}>
                <button>Return to Home page</button>
            </Link>
        </>
    );
}
