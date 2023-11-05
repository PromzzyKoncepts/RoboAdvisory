/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import Lottie from "lottie-react"
import AOS from "aos";
import "aos/dist/aos.css";
import AboutCounter from "../../hooks/aboutCounter";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import animationData from "../../assets/Animation.json";

const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-slate-100">
      <div className=" m-auto p-11 md:pb-[10rem] w-10/12">
        <div className="flex gap-2">
          <div>
            <p className="font-bold">What We are all about</p>
            <h2 className="text-5xl text-slate-800 font-semibold py-3">
              Choose WealthVest!{" "}
            </h2>
            <p className=" md:w-[80%] w-[150%]">
              Because since 1990, we've lived a philosophy of helping our
              clients solve their toughest financial problems - while delivering
              high quality, unconflicted investment advice.
            </p>
          </div>
          <Lottie className=" hidden md:block scale-x-[-1] w-[25%]" animationData={animationData } />
          <Lottie className="md:hidden  scale-x-[-1] min-w-[50%] translate-y-[-4rem]" animationData={animationData } />
        </div>
        <AboutCounter />
      </div>
    </div>
  );
};

export default Section2;
