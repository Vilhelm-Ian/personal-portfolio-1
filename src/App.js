import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { AiFillGithub, AiFillMail, AiFillEnvironment } from "react-icons/ai";
import Project from "./Project";

function App() {
  return (
    <main className="px-8 md:px-20 lg:px-40">
      <Navbar />

      <section
        id="home"
        className="min-h-screen text-center mt-4 flex flex-col justify-center "
      >
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src="/avatar.png" layout="fill" objectFit="cover" />
        </div>
        <h1 className="text-3xl md:text-5xl font-medium text-teal-500">
          Ptolomej Petar Stojanov
        </h1>
        <h3 className="text-xl md:text-2xl">Front End Developer</h3>
        <p className="text-md py-1 text-gray-800 md:text-xl">
          Enthusiastic and motivated self-learning about information technology.
          Focused on concurrent computing, and web development. Now I am looking
          for more experience in my field.{" "}
        </p>
        <div className="text-5xl py-4 flex justify-center gap-16 text-gray-600">
          <a href="https://github.com/Vilhelm-Ian">
            <AiFillGithub />
          </a>
        </div>
      </section>

      <section id="service" className="">
        <h1 className="text-xl font-medium">Services I Offer</h1>
        <p className="mt-1 text-md">
          I have experience in building websites. I offer a wide of service,
          including Frontend & Backend Development
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-8">
          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="software.png" className="w-48" alt="gambar" />
            <h2 className="text-xl">Software Development</h2>
            <p className="text-gray-500">
              I can help you solve a problem, build a product or grow existing
              project.
            </p>
            <p className="text-xl ">Tools I Use</p>
            <ul>
              <li>React</li>
              <li>Node JS (Express)</li>
              <li>Rust</li>
              <li>Vim</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mt-10">
        <h1 className="text-xl font-medium">Portfolio</h1>
        <p className="mt-1 text-md">
          Here are some projects that I have managed.
        </p>
        <Project />
      </section>

      <section id="footer" className="mt-5 rounded bg-black py-8 px-8">
        <div className="text-white md:text-center">
          <h1 className="font-medium text-lg">Contact Me</h1>

          <ul className="md:flex justify-center gap-4">
            <li className="flex items-center gap-2">
              <AiFillMail />
              <p>ptolomejpetar@protonmail.com</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillEnvironment />
              <p>Skopje</p>
            </li>
          </ul>

          <div className="flex text-xl text-white gap-4 mt-2 md:justify-center">
            <a href="https://github.com/Vilhelm-Ian">
              <AiFillGithub />
            </a>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </section>
    </main>
  );
}

export default App;
