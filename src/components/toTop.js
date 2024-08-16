import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect } from 'react';




export default function ToTop({dataScrollY}) {

  let [functionTop,setFunctionTop] = useState('none')
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY <= dataScrollY){
        setFunctionTop('none')
      }else{
        setFunctionTop('flex')
      }
    })
  },[])

  return (
      <div
        onClick={()=>{window.scroll({ 
          top:0,
          behavior:'smooth',
        })}}
        style={{display:functionTop,display:functionTop,}}
        className=" hover:border-[#2bff83] cursor-pointer h-[40px] w-[40px] fixed z-10 rounded-[50%] border-2 end-10 bottom-10 flex justify-center items-center "
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className="justify-center text-[#2bff83] text-3xl  "
        />
      </div>
  );
}
