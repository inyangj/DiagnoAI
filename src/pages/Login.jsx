import React from "react";
import robot from "../assets/authImage.png"


import google from "../assets/svg/google.svg";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import SigninForm from "../components/SigninForm";

const Login = () => {
  return (
    <div className="md:grid md:grid-cols-2">
      <div className="hidden md:block h-full ">
        <img src={robot} className="h-full" alt="robot" />
      </div>
      <main className=" md:min-w- relative px-4 md:py-[7rem] md:px-[4rem] pt-[3.25rem] font-AeonikTRAIL_Regular h-screen md:h-full">
        <div className="grid gap-1 mb-8">
          <h2 className=" font-Nohemi_Bold text-primary font-bold text-[1.625rem]">
            Log in with your email 
          </h2>
          <p className=" text-gray_3 text-[0.86rem]">
            Let’s get you up and running with DiagnoAI
          </p>
        </div>
        <SigninForm />
        <div className="flex items-center my-8">
          <hr className="flex-grow border-t border-gray-400" />
          <p className="mx-2 text-gray-500">or</p>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
        <button className="flex items-center gap-[0.72rem] border border-gray_4 rounded-[0.27rem] w-full justify-center py-2 font-AeonikTRAIL_Bold font-bold mb-8"><img src={google} alt="Google Icon" />Continue with Google</button>
        <p className="text-[0.75rem] text-gray_3">Don’t have an account? <span className="text-secondary">Sign up</span></p>
        <div className="flex justify-center gap-2 text-secondary absolute md:static bottom-5  left-16">
            <p>Terms of Service</p>
            <p className="text-black">|</p> <p>Privacy Policy</p>
        </div>
      </main>
    </div>
  );

};

export default Login;
