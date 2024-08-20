import Navigation from "../Navigation";
import Header from "../Header";
import { Toaster } from "react-hot-toast";
import HamburgerMenu from "../Hamburger";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <HamburgerMenu direction="right" />
      <main>
        <Toaster position="top-center" />
        {children}
      </main>
      <Navigation />
    </>
  );
}
