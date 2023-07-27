import Image from "next/image";
import { FaSistrix } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="py-20 flex justify-center">
        <form className="bg-cyan-800 w-[60%] py-14 px-20 rounded-xl">
          <h1 className="text-center text-white text-5xl tracking-wide mb-8">
            welcome to my portfolio!
          </h1>
          <input
            type="text"
            className="bg-white border rounded-3xl focus:outline-none py-1 px-2 w-full h-[2.5em]"
          />
          <div className="text-cyan-800 relative z-1 left-[46.5em] bottom-[2.2em]">
            <FaSistrix className="text-3xl hover:cursor-pointer hover:text-black" />
          </div>
        </form>
      </main>
    </>
  );
}
