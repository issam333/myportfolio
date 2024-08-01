import { Link } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills  from "./components/skills";

export default function home() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center",overflowX:'hidden' }}>
      <div style={{ width: "65%", }}>
        <header
          style={{
            textTransform: "capitalize",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div className=" text-white font-sans text-lg font-bold">
            ISS<span style={{ color: "rgb(43, 255, 150)" }}>AM.</span>
          </div>
          <div className="sectionRight">
            <ul
              className=" font-mono text-slate-300 "
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",
              }}
            >
              <li className="hover:scale-125 duration-10" id="liNav">
                home
              </li>
              <li className="hover:scale-125 duration-10" id="liNav">
                work
              </li>
              <li className="hover:scale-125 duration-10" id="liNav">
                skills
              </li>

              <li
                style={{
                  border: " solid rgb(43, 255, 131) 1.9px",
                  padding: "2px 12px",
                  borderRadius: "50px",
                  cursor:'pointer',
                }}
                
                id="liNavContact"
              >
                contact
              </li>
            </ul>
          </div>
        </header>
        <Home />
        <Projects/>
        <Skills/>
      </div>
    </div>
  );
}
