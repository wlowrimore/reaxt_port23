import "../styles/globals.css";
import MainNav from "./components/navigation/MainNav";
import { Cabin } from "next/font/google";
import Providers from "./Providers";

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
    <html className="h-full scroll-smooth" lang="en">
      <body className={`${cabin.className} h-screen mx-6`}>
        <Providers>
          <MainNav />
          <div className="bg-white dark:bg-black dark:text-white py-10 px-[7.2%] h-95">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
