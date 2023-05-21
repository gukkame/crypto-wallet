import SignUpForm from "@/components/forms/SignUpForm";
import SecretForm from "@/components/forms/SecretForm";
import TestSecretForm from "@/components/forms/TestSecretForm";
import styles from "@/styles/Auth.module.css";
import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [currentPage, setCurrentPage] = useState("register");

  const handleDataFromAnotherPage = (data) => {
    setCurrentPage(data);
  };

  let content = null;

  if (currentPage === "secret") {
    content = <SecretForm onData={handleDataFromAnotherPage}/>;
  } else if (currentPage === "register") {
    content = <SignUpForm onData={handleDataFromAnotherPage} />;
  } else if (currentPage === "secret-test") {
    content = <TestSecretForm />;
  }

  return <>{content}</>;
}
