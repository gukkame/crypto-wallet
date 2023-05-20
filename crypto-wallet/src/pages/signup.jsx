import SignUpForm from "@/components/forms/SignUpForm";
import SecretForm from "@/components/forms/SecretForm";
import styles from "@/styles/Auth.module.css";
import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [currentPage, setCurrentPage] = useState("register");
  const [dataFromAnotherPage, setDataFromAnotherPage] = useState(null);

  const handleDataFromAnotherPage = (data) => {
    setDataFromAnotherPage(data);
    setCurrentPage("secret");
  };

  let content = null;

  if (currentPage === "secret") {
    content = <SecretForm />;
  } else if (currentPage === "register") {
    content = <SignUpForm onData={handleDataFromAnotherPage} />;
  }

  return <>{content}</>;
}
