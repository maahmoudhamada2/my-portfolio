import { ReactNode } from "react";
import Header from "../components/Header/Header";
import "./globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className="dark" lang="en">
      <body className="bg-main-bg">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
