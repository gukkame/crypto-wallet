import Head from "next/head";
import Image from "next/image";

import { LogInButton, SignUpButton } from "../components/buttons";
import Link from "next/link";
import Home from "./home";

// const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <title>CryptoCabata</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
