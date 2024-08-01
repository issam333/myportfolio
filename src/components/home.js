import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import cv from "./cv.pdf";
import myImg from "./myImg.jpg";
import CountUp from "react-countup";



export default function home() {
  let stats = [
    {
      num: 12,
      text: "Projects Completed",
    },
    {
      num: 7,
      text: "Technologies Mastered",
    },
    {
      num: 500,
      text: "Code Commits",
    },
  ];
  console.log();

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
            <motion.p className="font-mono text-sm text-slate-300 ">
              Frontend Web Developer
            </motion.p>
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

          <div style={{ display: "flex", minWidth: "400px" }} className=" ">
            <div
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                overflow: "hiden",
                position: "relative",
                // background: "aqua",
              }}
            >
              <img
                src={myImg}
                style={{
                  borderRadius: "50%",
                  width: "199px",
                  overflow: "hiden",
                  height: "199px",
                  margin: "10px",
                }}
              />
              <motion.svg
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  // background: "green",
                }}
              >
                <motion.circle
                  cx="143"
                  cy="109.5"
                  r="100"
                  id="borderCicle"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: [
                      "15 120 25 25",
                      "16 25 92 72",
                      "4 250 22 22",
                    ],
                    rotate: [120, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                ></motion.circle>
              </motion.svg>
            </div>
          </div>
        </div>
        {/* part stats */}
        <div className="flex font-mono mt-10 w-auto ">
          {stats.map((el) => {
            return (
              <div className=" flex w-[100%] ">
                <div className=" m-auto gap-2 flex w-10 ">
                  <CountUp
                    end={el.num}
                    duration={5}
                    delay={0.5}
                    className="text-6xl font-semibold "
                  />
                  <p className="w-4  flex text-[12px] items-center  ">
                    {el.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </body>
    </>
  );
}
