import { Link } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills from "./components/skills";
import AboutMe from "./components/aboutMe";
import ToTop from "./components/toTop";
import { useState } from "react";


export default function Content() {
  const [dataScrollY, setDataScrollY] = useState('');

  return (
    <div className=" w-full flex justify-center overflow-x-hidden ">
      <div className=" sm:w-2/3 overflow-hidden ">
        <header className=" sm:bg-[#0f1624] fixed capitalize sm:flex w-[100%] sm:w-[66.7%] z-20 justify-between pt-4 px-4 sm:px-0">
          <div className="text-center mb-3 text-white font-sans text-lg font-bold">
            ISS<span className="text-[#2bff96]">AM.</span>
          </div>
          <div className="sectionRight">
            <ul className="font-mono text-slate-300 flex justify-around sm:justify-between gap-4 sm:gap-10">
              <li className="hover:scale-125 duration-150" id="liNav">
                home
              </li>
              <li className="hover:scale-125 duration-150" id="liNav">
                work
              </li>
              <li className="hover:scale-125 duration-150" id="liNav">
                skills
              </li>
              <li className="hover:scale-125 duration-150" id="liNav">
                about me
              </li>
              <li
                className="border-solid border-[1.9px] border-[#2bff83] px-[12px] py-[2px] rounded-full cursor-pointer"
                id="liNavContact"
              >
                contact
              </li>
            </ul>
          </div>
        </header>
        <div className="relative p-5 mt-[30px]">



          <Home dataScrollY={dataScrollY} setDataScrollY={setDataScrollY} />
          <Projects />
          <Skills />
          <AboutMe />
        </div>
      </div>
      <ToTop dataScrollY={dataScrollY} />
    </div>
  );
}
