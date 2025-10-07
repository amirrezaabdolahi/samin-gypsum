import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegestery";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "ثمین گچ",
  description: "وبسایت رسمی شرکت ثمین گچ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
