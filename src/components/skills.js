import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faLaravel,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

export default function skills() {
  return (
    <div className="text-slate-100 p-5 mt-2 block">
      <h1 className="text-center text-2xl m-1">my skills</h1>
      <p className="text-sm m-3">
      </p>

      <div className="flex gap-6 flex-wrap m-1 justify-center ">
       <a href="https://www.w3schools.com/html/">
       <div id='iconSkills1'className="text-8xl pr-3 pl-3 rounded-lg bg-slate-700 text-slate-200 ">
            <FontAwesomeIcon icon={faHtml5} className="text-7xl" />
        </div>
       </a>
        <a href="https://www.w3schools.com/css/">
          <div id='iconSkills2'className="text-8xl pr-3 pl-3 rounded-lg bg-slate-700 text-slate-200 ">
            <FontAwesomeIcon icon={faCss3Alt} className="text-7xl" />
          </div>
        </a>
        <a href="https://www.w3schools.com/Js/">
          <div id='iconSkills3'className="text-8xl pr-3 pl-3 rounded-lg bg-slate-700 text-slate-200 ">
            <FontAwesomeIcon icon={faJs} className="text-7xl" />
          </div>
        </a>
        <a href="https://www.w3schools.com/react/">
          <div id='iconSkills4'className="text-8xl pr-3 pl-3 rounded-lg bg-slate-700 text-slate-200 ">
            <FontAwesomeIcon icon={faReact} className="text-7xl" />
          </div>
        </a>
        <a href="https://www.w3schools.com/bootstrap/">
          <div id='iconSkills5'className="text-8xl pr-3 pl-3 rounded-lg bg-slate-700 text-slate-200 ">
            <FontAwesomeIcon icon={faBootstrap} className="text-7xl" />
          </div>
        </a>
        <a href="https://www.w3schools.com/git/">
          <div id='iconSkills6'className="text-8xl pr-3 pl-3 rounded-lg bg-slate-700 text-slate-200 ">
            <FontAwesomeIcon icon={faGitAlt} className="text-7xl" />
          </div>
        </a>
        <a href="https://laravel.com/">
          <div id='iconSkills7'className="text-8xl pr-3 pl-3 rounded-lg bg-slate-700 text-slate-200 ">
            <FontAwesomeIcon icon={faLaravel} className="text-7xl" />
          </div>
        </a>
      </div>
    </div>
  );
}
