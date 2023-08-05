import Marquee from "react-fast-marquee";
import FooterMarquee from "./footer_marquee";

const Footer = (tech) => {
  return (
    <Marquee speed="30">
      <footer
        className="lg:text-xl px-10 text-white text-opacity-30 py-5 flex justify-between space-x-12 lg:space-x-28 dark:bg-black bg-cyan-900"
        aria-hidden="true"
      >
        <FooterMarquee tech={tech} />
        <FooterMarquee tech={tech} />
        <FooterMarquee tech={tech} />
        <FooterMarquee tech={tech} />
        <FooterMarquee tech={tech} />
      </footer>
    </Marquee>
  );
};
export default Footer;
