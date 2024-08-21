import Navigation from "../Navigation";
import Header from "../Header";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Toaster position="top-center" />
        {children}
      </main>
      <Navigation />
    </>
  );
}
