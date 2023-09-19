import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/navigation/Header";
import Footer from "./components/footer/Footer";
import ToTheTop from "./components/ToTheTop";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
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
      <body className={`${poppins.className}`}>
        <Header />
        <div className="h-screen w-full">{children}</div>
        <ToTheTop />
        <div className="hidden md:flex">
          <Footer />
        </div>
      </body>
    </html>
  );
}
