"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import Image from "next/image";
import Link from "next/link";

import "./contact.css";
import Map from "../Map";
import ContactForm from "./ContactForm";

import Github from "../../../public/images/svg/github.svg";
import Linkedin from "../../../public/images/svg/linkedin.svg";
import Instagram from "../../../public/images/svg/instagram1.svg";
import Twitter from "../../../public/images/svg/twitter1.svg";

const Contact = () => {
  const address = "706 Church St, Nashville, TN";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitEmail = (e) => {
    e.preventDefault();

    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setSubject(subject);
    setMessage(message);
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_k4ijfrq",
        "template_6cu7t3j",
        "#form",
        "6mMLJJUzkP7lq3rbP"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      )
      .then(() => {
        setIsLoading(false);
        form.reset();
      });
  };

  const showStatusMessage = () => {
    if (success) {
      return (
        <div
          id="success-toast"
          className="absolute top-[10em] left-2 md:left-[33%] right-2 md:right-[33%] z-1 bg-green-200 text-center rounded-lg px-2 shadow-md shadow-gray-700 max-w-full md:max-w-[50em]"
        >
          <h3>
            Hi, {firstName}! Thank you for your message regarding
            <span style={{ color: "purple" }}> "{subject}" </span>. I will be in
            touch with you at <span style={{ color: "purple" }}> {email} </span>
            as soon as possible.
          </h3>
        </div>
      );
    } else if (!success && error) {
      return (
        <div className="absolute top-[10em] left-2 md:left-[33%] right-2 md:right-[33%] z-1 bg-green-200 text-center rounded-lg px-2 shadow-md shadow-gray-700 max-w-full md:max-w-[50em]">
          <h3>
            Oops! Something went wrong. Please refresh your browser and try
            again.
          </h3>
        </div>
      );
    }
  };

  return (
    <main className="min-h-screen xl:bg-custombg4 bg-fixed bg-no-repeat bg-cover flex flex-col justify-center items-center md:py-[12rem] lg:py-8 xl:px-[11rem]">
      <div className="relative bottom-[16rem] z-10 w-full">
        {success || error ? showStatusMessage() : null}
      </div>
      {isLoading && (
        <h5 className="text-xl text-center text-blue-100">Sending...</h5>
      )}
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:mx-4">
          <Map address={address} />
          <div className="flex flex-col items-center justify-center my-8 2xl:mt-12">
            <h1 className="2xl:text-3xl md:text-black">William Lowrimore</h1>
            <h3 className="2xl:text-3xl">Front End Developer</h3>
            <h3 className="2xl:text-3xl">Nashville, TN</h3>
            <div className="flex space-x-6 mt-6">
              <Link
                href="https://www.linkedin.com/in/william-lowrimore-dev"
                className="transform w-12 rounded-[50%] transition hover:bg-teal-400 duration-700 ease"
              >
                <Image
                  src={Linkedin}
                  alt="linkedin link"
                  width={500}
                  height={500}
                />
              </Link>
              <Link
                href="https://www.github.com/wlowrimore"
                className="transform w-12 rounded-[50%] transition hover:bg-teal-400 duration-700 ease"
              >
                <Image
                  src={Github}
                  alt="github link"
                  width={500}
                  height={500}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/william-lowrimore-dev"
                className="transform w-12 rounded-[50%] transition hover:bg-teal-400 duration-700 ease"
              >
                <Image
                  src={Twitter}
                  alt="twitter link"
                  width={500}
                  height={500}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/william-lowrimore-dev"
                className="transform w-12 rounded-[50%] transition hover:bg-teal-400 duration-700 ease"
              >
                <Image
                  src={Instagram}
                  alt="instagram link"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-900 lg:mx-4 leading-relaxed">
          <ContactForm
            setIsLoading={setIsLoading}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setSubject={setSubject}
            setMessage={setMessage}
            submitEmail={submitEmail}
          />
        </div>
      </div>
    </main>
  );
};
export default Contact;
