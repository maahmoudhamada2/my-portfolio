import { ReactNode } from "react";
import Header from "../components/Header/Header";
import "./globals.css";
import Footer from "../components/Footer/Footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className="dark" lang="en">
      <body className="bg-main-bg text-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
