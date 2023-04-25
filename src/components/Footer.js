import React from "react";
import {ImLinkedin2, ImFacebook} from "react-icons/im";
import {FaRegEnvelope} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex p-[40px] h-300px md:px-[100px] bg-gray justify-between">
      <div className="mr-4 w-[80px] h-[80px] flex justify-center items-center">
        <img src={"../../images/logo.png"} width={"100%"} height={"100%"} alt="Logo"></img>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="font-medium mb-4">Connect with us:</div>
        <div className="flex justify-center items-center gap-3">
          <div className="text-primary border-2 rounded-full border-primary p-3 hover:text-secondary hover:border-secondary duration-100 hover:-translate-y-1">
            <a href="https://twitter.com/saigowthamr/" target="_blank" rel="noreferrer">
              <ImLinkedin2 />
            </a>
          </div>
          <div className="text-primary border-2 rounded-full border-primary p-3 hover:text-secondary hover:border-secondary duration-100 hover:-translate-y-1">
            <a href="https://twitter.com/saigowthamr/" target="_blank" rel="noreferrer">
              <ImFacebook />
            </a>
          </div>
          <div className="text-primary border-2 rounded-full border-primary p-3 hover:text-secondary hover:border-secondary duration-100 hover:-translate-y-1">
            <a href="https://twitter.com/saigowthamr/" target="_blank" rel="noreferrer">
              <FaRegEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
