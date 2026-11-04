import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./bootstrap-client";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "4tomorrow",
  description: "4tomorrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column min-vh-100`}>
        <Header />
        <main className="flex-grow-1 d-flex flex-column">{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
