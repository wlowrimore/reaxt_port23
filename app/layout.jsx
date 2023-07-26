import "../styles/globals.css";
import MainNav from "./components/navigation/MainNav";

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
      <body className={`${cabin.className} h-screen mx-6`}>
        <MainNav />
        <div className="py-10 px-[7.2%] h-95">{children}</div>
      </body>
    </html>
  );
}
