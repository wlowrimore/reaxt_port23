import "../styles/globals.css";
import MainNav from "./components/navigation/MainNav";
import { Cabin } from "next/font/google";
import Providers from "./Providers";
import Footer from "./components/footer/footer";

const cabin = Cabin({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "William Lowrimore | Software Engineer",
  description:
    "William Lowrimore is a meticulous Software Engineer and Web Developer from Nashville, TN. with a focus on Front End Development using technologies such as: React, Next.js, Django-Python, GraphQL, Tailwind CSS, and much more...",
  keywords: [
    "Software Engineer",
    "Front End",
    "Back End",
    "Developer",
    "Web",
    "Website",
    "React",
    "SPA",
    "SEO",
    "Mobile",
    "Responsive",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cabin.className} h-screen xl:mx-6`}>
        <Providers>
          <MainNav />
          <div className="bg-white dark:bg-black dark:text-white lg:py-10 lg:px-[7.2%] h-95">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
