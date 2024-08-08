import { Link } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function home() {
  return (
    <div className=" w-full flex justify-center overflow-x-hidden ">
      <div className="m-2 sm:w-2/3 overflow-hidden ">
        <header className="capitalize sm:flex w-full justify-between mt-5 px-4 sm:px-0">
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
              <li
                className="border-solid border-[1.9px] border-[#2bff83] px-[12px] py-[2px] rounded-full cursor-pointer"
                id="liNavContact"
              >
                contact
              </li>
            </ul>
          </div>
        </header>
        <Home />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
