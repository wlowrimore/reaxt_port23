import "../styles/globals.css";
import MainNav from "./components/navigation/MainNav";
import Footer from "./components/footer/footer.jsx";

import { Cabin } from "next/font/google";

const cabin = Cabin({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "William Lowrimore | Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cabin.className} h-screen m-6 lg:m-12`}>
        <MainNav />
        <div className="lg:mt-20 py-10 px-[7.2%]">{children}</div>
      </body>
      {/* <div className="flex justify-between">
        <Footer />
      </div> */}
    </html>
  );
}
