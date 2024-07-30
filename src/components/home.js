import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { hover } from "@testing-library/user-event/dist/hover";
import cv from "./cv.pdf";
import myImg from "./myImg.jpg";

export default function home() {
  return (
    <>
      <body
        style={{
          color: "#fff",
          marginTop: "70px",
        }}
        className="font-mono"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          {/* partLeft */}
          <div className="partLeft">
            <p className="font-mono text-sm text-slate-300 ">
              Frontend Web Developer
            </p>
            <p className="font-mono text-5xl text-slate-300">Hello I'm</p>
            <p
              style={{ color: "rgb(43, 255, 131)" }}
              className="font-mono text-5xl font-bold "
            >
              Issam Asraoui
            </p>
            <p className="font-mono text-sm text-slate-400 mt-3 ">
              I'm a skilled front-end web developer with expertise in CSS, HTML,
              and JavaScript. Proficient in frameworks such as Bootstrap and
              Tailwind, I create responsive and visually appealing web
              interfaces. Additionally, I have experience with React JS for
              dynamic web applications and Laravel for efficient backend
              integration.
            </p>
            <div
              style={{ maxHeight: "40px" }}
              className="flex items-center gap-10 mt-4"
            >
              <a href={cv} download>
                <button className="btnDownload">
                  Download CV
                  <FontAwesomeIcon
                    style={{ marginLeft: "5px" }}
                    icon={faDownload}
                  />
                </button>
              </a>
              <div
                style={{ display: "flex", gap: "15px", maxHeight: "30px" }}
                className=""
              >
                <a
                  href=""
                  style={{ color: "rgb(43, 255, 131)" }}
                  className="text-2xl hover:scale-150 duration-200"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href=""
                  style={{ color: "rgb(43, 255, 131)" }}
                  className="text-2xl hover:scale-150 duration-200"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href=""
                  style={{ color: "rgb(43, 255, 131)" }}
                  className="text-2xl hover:scale-150 duration-200"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href=""
                  style={{ color: "rgb(43, 255, 131)" }}
                  className="text-2xl hover:scale-150 duration-200"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>

          {/* partRight */}

          <div
            style={{ display: "flex", }}
            className=" "
          >
            <div
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                overflow: "hiden",
                position: "relative",
              }}
            >
              <img
                src={myImg}
                
                style={{
                  borderRadius: "50%",
                  height: "auto",
                  overflow: "hiden",
                }}
              />
              <div id="borderCicle"
                
              ></div>
            </div>
          </div>
        </div>

        <div
          style={{ width: "100%" }}
          className="flex gap-10 mt-10 justify-around"
        >
          <div
            style={{ width: "100px" }}
            className="flex text-sm items-center gap-1"
          >
            <div className="text-6xl font-semibold">26</div>
            Projects Completed
          </div>
          <div
            style={{ width: "100px" }}
            className="flex text-sm items-center gap-1"
          >
            <div className="text-6xl font-semibold">7</div>
            Technologies Mastered
          </div>
          <div
            style={{ width: "100px" }}
            className="flex text-sm items-center gap-1"
          >
            <div className="text-6xl font-semibold">500</div>
            Code Commits
          </div>
        </div>
      </body>
    </>
  );
}
