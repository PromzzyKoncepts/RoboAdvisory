/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import AboutCounter from '../../hooks/aboutCounter'
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-slate-100">
      <div className=" m-auto p-11 md:pb-[10rem] w-10/12">
        <p className="font-bold">What We are all about</p>
        <h2 className="text-5xl text-slate-800 font-semibold py-3">
          Choose WealthVest!{" "}
        </h2>
        <p className=" md:w-[50%]">
          Because since 1990, we've lived a philosophy of helping our clients
          solve their toughest financial problems - while delivering high
          quality, unconflicted investment advice.
        </p>
        <AboutCounter />
      </div>
      
    </div>
  );
}

export default Section2