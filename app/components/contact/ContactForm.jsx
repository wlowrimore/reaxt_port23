"use client";
import React from "react";

const ContactForm = ({
  submitEmail,
  setFirstName,
  setLastName,
  setEmail,
  setSubject,
  setMessage,
}) => {
  return (
    <form
      className="bg-gray-700 flex flex-col items-center max-w-[20rem] mt-4 pb-20 md:max-w-full p-6"
      id="form"
      onSubmit={submitEmail}
    >
      <h1 className="text-xl 2xl:text-2xl text-orange-400 uppercase 2xl:pb-10 font-semibold">
        Reach out
      </h1>
      <input type="hidden" value="nothing" />
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col w-full">
          <input
            className="bg-transparent border-b border-white placeholder-white text-white font-thin tracking-wide focus:bg-transparent focus:border-white outline-none w-full px-1"
            type="text"
            name="first_name"
            required
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
          />
          <label
            htmlFor="first-name"
            className="text-orange-300 px-2 text-start"
          >
            first name
          </label>
        </div>
        <div className="flex flex-col w-full">
          <input
            className="bg-transparent border-b border-white placeholder-white text-white font-thin tracking-wide focus:bg-transparent focus:border-white outline-none w-full px-1"
            type="text"
            name="last_name"
            required
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="off"
          />
          <label
            htmlFor="last-name"
            className="text-orange-300 px-2 text-start"
          >
            last name
          </label>
        </div>
      </div>
      <div className="flex flex-col w-full py-4">
        <input
          className="bg-transparent border-b border-white placeholder-white text-white font-thin tracking-wide focus:bg-transparent focus:border-white outline-none px-1"
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="email" className="text-orange-300 px-2 text-start">
          email
        </label>
      </div>
      <div className="flex flex-col w-full pb-2">
        <input
          className="bg-transparent border-b border-white placeholder-white placeholder:font-thin text-white tracking-wide focus:bg-transparent outline-none px-1"
          type="text"
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
          required
          autoComplete="off"
          id="subject"
        />
        <label htmlFor="subject" className="text-orange-300 px-2 text-start">
          subject
        </label>
      </div>

      <div className="flex flex-col w-full py-2">
        <textarea
          className="bg-black bg-opacity-10 border-b border-white rounded-sm px-1 py-1 placeholder-white placeholder:text-center placeholder:fixed placeholder:bottom-0 text-white font-thin tracking-wide outline-none"
          name="message"
          required
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
          id="message"
          cols="30"
          rows="8"
        ></textarea>
        <label htmlFor="message" className="text-orange-300 px-2 text-start">
          message
        </label>
      </div>
      <button className="transform bg-emerald-200 text-black text-xl font-semibold px-5 w-full mt-4 rounded-sm shadow-sm shadow-black hover:bg-gray-200 hover:text-black tracking-wide transition duration-500 hover:scale-95">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
