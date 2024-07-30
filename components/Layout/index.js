import Navigation from "../Navigation";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Navigation />
    </>
  );
}
