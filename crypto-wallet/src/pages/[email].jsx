import { useRouter } from "next/router";

export default function MainPage() {
    const router = useRouter();
    const { email } = router.query;
  
    return <div>Email: {email}</div>;
}
