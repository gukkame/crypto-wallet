import styles from "@/styles/Home.module.css";
import auth from "@/styles/Auth.module.css";
import icons from "@/styles/Icons.module.css";
import SectionOne from "@/components/homePage/section_1";
import SectionTwo from "@/components/homePage/section_2";
import SectionThree from "@/components/homePage/section_3";
import SectionFour from "@/components/homePage/section_4";
import SectionFive from "@/components/homePage/section_5";

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
}
