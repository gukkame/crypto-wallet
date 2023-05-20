import Link from "next/link";
export default function SignUpButton() {
  return (
    <Link href={`/signup`}>
      <button> Sign Up button</button>
    </Link>
  );
}
