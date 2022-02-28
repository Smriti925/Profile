import React from "react";
import axios from "axios";

import SkillsData from "./SkillsData";

function Home() {
  return (
    <div className="bg-slate-900">
      <section className="h-screen grid items-center">
        <div className="">
          <p className="flex justify-center text-lg text-white p-5 font-pop">
            Hi, my name is
          </p>
          <div className="font-syne text-zinc-900 text-6xl md:text-8xl p-10 md:p-16 flex justify-center items-center ">
            <div className="text text-pink transform transition duration-200 hover:scale-105">
              {" "}
              SMRITI.
            </div>
            <div className="text text-blue transform transition duration-200 hover:scale-105">
              {" "}
              SMRITI.
            </div>
            <div className="text transform transition duration-200 hover:scale-105">
              {" "}
              SMRITI.
            </div>
          </div>
          <div className="flex justify-center ">
            <p className="text-justify md:text-center text-lg text-white lg:w-1/2 p-5 font-pop">
              I build things for the WEB. My area of expertise is responsive
              design. I strive to make the web a beautiful place with every line
              of code{" "}
              <span className="underline decoration-pink-500">I write.</span>
            </p>
          </div>
          <img src="https://demo.fffuel.co/looking-ahead/images/oooscillate.svg"></img>
        </div>
      </section>

      <div className="">
        <div className="flex justify-center opacity-75">
          <img
            src="https://demo.fffuel.co/looking-ahead/images/ccchaos-2.svg"
            className="h-60 lg:h-[70vh] absolute svgRotate -z-10"
          ></img>
        </div>
        {/* about section */}
        <section className="" id="about">
          <h1 className="text-4xl md:text-6xl font-syne font-bold flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 py-20">
            ABOUT ME
          </h1>
          <div className="flex text-white text-lg font-pop justify-center text-center px-5">
            <div className="font-pop">
              <p className="py-2 font-medium">
                University :
                <span className=""> NIT Hamirpur, Himachal Pradesh, India</span>
              </p>
              <p className="py-2 font-medium">
                Degree : <span className=""> Bachelor of Technology</span>
              </p>
              <p className="py-2 font-medium">
                Graduation Year : <span className="">2024</span>
              </p>
              <p className="py-2">
                Subject Area :{" "}
                <span className=""> Computer Science and Engineering</span>
              </p>
              <p className="py-2">
                Extracurricular :{" "}
                <span className="">
                  {" "}
                  Executive Member, Team SPEC | Entrepreneur-Cell NITH | Mentee
                  at Lean In Circle NITH
                </span>
              </p>
            </div>
          </div>
        </section>
        {/* skills section */}
        <section className="skills_section" id="skills">
          <h1 className="text-4xl md:text-6xl font-syne font-bold flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 py-20">
            SKILLS
          </h1>
          <div className="bg-gradient-to-l from-blue-500 via-pink-500 to-l">
            {" "}
            <SkillsData />
          </div>
        </section>
      </div>

      {/* project section */}
      <section className="project_section" id="projects">
        <h1 className="text-4xl md:text-6xl font-syne font-bold flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 py-20">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 text-white font-pop px-5 sm:px-16 md:px-28 lg:px-80 gap-10 pb-10">
          <div className="rounded-3xl border-4 border-pink-500 shadow-md shadow-blue-500 bg-zinc-900 w-full">
            <a href="https://ip-tracker1.vercel.app/" target="_blank">
              <img
                src="/Projects/ipimg.jpg"
                className="p-2 w-full h-64 object-cover rounded-t-3xl"
              />
            </a>
            <div className="p-2">
              <h3 className="font-bold">IP Address Tracker</h3>
              <p className="text-sm py-2 text-gray-400">
                Enter IP addresses to reveal geolocation of a user or computing
                device.
              </p>
              <a href="https://github.com/Smriti925/IP.Tracker" target="_blank">
                <img
                  src="https://img.icons8.com/ios-filled/96/000000/github.png"
                  className="h-10 cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center toHide">
            <img
              src="https://demo.fffuel.co/looking-ahead/images/step-1.svg"
              className="svgRotate h-48"
            ></img>
          </div>
          <div className="flex items-center justify-center toHide">
            <img
              src="https://demo.fffuel.co/looking-ahead/images/step-2.svg"
              className="svgRotate h-48"
            ></img>
          </div>
          <div className="rounded-3xl border-4 border-pink-500 shadow-md shadow-blue-500 bg-zinc-900 w-full">
            <a href="https://design-hub-seven.vercel.app/" target="_blank">
              <img
                src="/Projects/design.jpg"
                className="p-2 w-full h-64 object-cover rounded-t-3xl"
              />
            </a>
            <div className="p-2">
              <h3 className="font-bold">Design Hub</h3>
              <p className="text-gray-400 text-sm py-2">
                Colorful UI with animation to impart a distinct identity to the
                project.
              </p>
              <a href="https://github.com/Smriti925/designHub" target="_blank">
                <img
                  src="https://img.icons8.com/ios-filled/96/000000/github.png"
                  className="h-10 cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border-4 border-pink-500 shadow-md shadow-blue-500 bg-zinc-900 w-full">
            <img
              src="/Projects/profile.jpg"
              className="p-2 w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-2">
              <h3 className="font-bold">Portfolio</h3>
              <p className="text-gray-400 text-sm py-2">
                Check my portfolio to get a glimpse of my skills and projects.
              </p>
              <a href="https://github.com/Smriti925/Profile" target="_blank">
                <img
                  src="https://img.icons8.com/ios-filled/96/000000/github.png"
                  className="h-10 cursor-pointer"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center toHide">
            <img
              src="https://demo.fffuel.co/looking-ahead/images/step-3.svg"
              className="svgRotate h-48"
            ></img>
          </div>
          <div className="flex items-center justify-center toHide">
            <img
              src="https://demo.fffuel.co/looking-ahead/images/step-1.svg"
              className="svgRotate h-48"
            ></img>
          </div>
          <div className="rounded-3xl border-4 border-pink-500 shadow-md shadow-blue-500 bg-zinc-900 w-full">
            <a href="https://github.com/Lovekesh-GH/EyeCanCode" target="_blank">
              <img
                src="/Projects/eccimg.jpeg"
                className="p-2 w-full h-64 object-cover rounded-t-3xl"
              />
            </a>

            <div className="p-2">
              <h3 className="font-bold">Eye Can Code</h3>
              <p className="text-gray-400 text-sm py-2">
                Aim to help visually impaired to set forth a step in the
                colossal coding world using Alan AI.
              </p>

              <a
                href="https://github.com/Lovekesh-GH/EyeCanCode"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/ios-filled/96/000000/github.png"
                  className="h-10 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
