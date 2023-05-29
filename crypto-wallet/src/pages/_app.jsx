import "@/styles/globals.css";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
//The _app file is called during each page initialization.
//The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. Therefore, any props you send to Component will be received by the page.
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <NavBar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}
