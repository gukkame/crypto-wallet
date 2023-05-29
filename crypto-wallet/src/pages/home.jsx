import styles from "@/styles/Home.module.css";
import SectionOne from "@/components/homePage/section_1";
import SectionTwo from "@/components/homePage/section_2";
import SectionThree from "@/components/homePage/section_3";
import SectionFour from "@/components/homePage/section_4";
import SectionFive from "@/components/homePage/section_5";
import SectionSix from "@/components/homePage/section_6";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
     <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}
