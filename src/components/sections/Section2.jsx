import React from 'react'
import AboutCounter from '../../hooks/aboutCounter'

const Section2 = () => {
  return (
    <div className="bg-slate-100">
      <div className=" m-auto py-9 w-10/12">
        <p className="font-bold">What We are all about</p>
        <h2 className="text-5xl text-slate-800 font-semibold py-3">Choose WealthVest! </h2>
        <p className=" w-[50%]">
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