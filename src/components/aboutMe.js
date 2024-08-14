import React from "react";

export default function aboutMe() {
  return (
    <div className="capitalize">
      <h2 className="text-white text-center text-2xl">About Me</h2>
      <div className="grid grid-cols-2 mt-2 ">
        <p className="text-slate-400">
          name <span className="text-slate-100">issam asraoui.</span>
        </p>
        <p className="text-slate-400">
          nationality <span className="text-slate-100">marocain.</span>
        </p>
        <p className="text-slate-400">
          freelance <span className="text-slate-100">available.</span>
        </p>
        <p className="text-slate-400">
          email <span className="text-slate-100">assraoui83@gmail.com.</span>
        </p>
        <p className="text-slate-400">
          languages <span className="text-slate-100">english,arabic.</span>
        </p>
      </div>
    </div>
  );
}
