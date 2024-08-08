import { useState } from "react";
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



export default function Home() {
  let [innerWidth,steInnerWidth] = useState(window.innerWidth >=500 ? ["143", "109.5"] : ["125", "108"])
  console.log(innerWidth[0])
  
  
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
  // if(window.innerWidth >= '500'){
  //   steInnerWidth(['143','109.5'])
  // }
  // else{
  //   steInnerWidth(['143','109.5'])
  // }

  return (
    <>
      <body className="font-mono text-white mt-5">
        <div className=" flex gap-3 flex-col-reverse  lg:grid lg:grid-cols-2">
          {/* partLeft or bottom */}
          <div className="text-center sm:text-start partLeft">
            <motion.p className="font-mono text-sm text-slate-300 ">
              Frontend Web Developer
            </motion.p>
            <p className="font-mono text-5xl text-slate-300">Hello I'm</p>
            <p
              style={{ color: "rgb(43, 255, 131)" }}
              className="font-mono text-5xl font-bold text-teal-400 "
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
            <div className="  max-h-10 flex flex-col sm:flex-row sm:justify-around items-center gap-2 mt-10">
              <a href={cv} download>
                <button className="btnDownload">
                  Download CV~
                  <FontAwesomeIcon className="ml-1" icon={faDownload} />
                </button>
              </a>
              <div
                style={{ display: "flex", gap: "15px", maxHeight: "30px" }}
                className=""
              >
                <a
                  href=""
                  style={{ color: "rgb(43, 255, 131)" }}
                  className="text-2xl sm:hover:scale-150 duration-200"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href=""
                  style={{ color: "rgb(43, 255, 131)" }}
                  className="text-2xl sm:hover:scale-150 duration-200"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href=""
                  style={{ color: "rgb(43, 255, 131)" }}
                  className="text-2xl sm:hover:scale-150 duration-200"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href=""
                  style={{ color: "rgb(43, 255, 131)" }}
                  className="text-2xl sm:hover:scale-150 duration-200"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>

          {/* partRight or top */}

          <div className="flex sm:min-w-[400px] ">
            <div className="flex w-[70%] justify-center items-center m-auto overflow-hidden relative">
              <img
                src={myImg}
                className="rounded-full w-[199px] h-[199px] overflow-hidden m-2"
              />
              <motion.svg className="absolute h-full w-full">
                <motion.circle
                  cx={innerWidth[0]}
                  cy={innerWidth[1]}
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
        <div className=" flex font-mono mt-14 w-auto ">
          {stats.map((el) => {
            return (
              <div className=" justify-start  w-[100%] ">
                <div className="  lg:m-auto gap-2 flex w-10 ">
                  <CountUp
                    end={el.num}
                    duration={5}
                    delay={0.5}
                    className="text-4xl sm:text-6xl font-semibold "
                  />
                  <p className="w-4 text-[10px]  flex sm:text-[12px] items-center  ">
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
