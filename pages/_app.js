import GlobalStyle from "../styles";
//import activities from "@/assets/activities";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
