import styles from "@/styles/Home.module.css";
import auth from "@/styles/Auth.module.css";
import icons from "@/styles/Icons.module.css";
import SectionOne from "@/components/homePage/section_1";
import SectionTwo from "@/components/homePage/section_2";
import SectionThree from "@/components/homePage/section_3";

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
}
