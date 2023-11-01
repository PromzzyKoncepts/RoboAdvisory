import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isCategories, setIsCategories] = useState(false);
  const [isLearn, setIsLearn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleCategories = () => setIsCategories((prev) => !prev);
  const handleLearn = () => setIsLearn((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-between py-5 px-[7rem] items-center border-b">
      <header>
        <h1>
          <a className="text-4xl" href="https://www.wealthfront.com/investing">
            Wealth<span>Vest</span>
          </a>
        </h1>
      </header>
      <nav className="flex gap-5">
        <a className="no-underline" href="https://www.wealthfront.com/cash">
          Cash
        </a>
        <a className="no-underline" href="https://www.wealthfront.com/cash">
          Bonds
        </a>

        <div
          className="items-center relative font-semibold cursor-pointer"
          onMouseEnter={handleCategories}
          onMouseLeave={handleCategories}
        >
          Automated Investing
          <ArrowDropDownIcon />
          {isCategories && (
            <section className=" z-[10000] absolute bg-[#333237aa] px-3 py-3 items-center rounded">
              <div className="mb-3">
                <a
                  className="bg-amber-500 hover:bg-[#FF8D3A] p-2 no-underline rounded text-white"
                  href="login"
                >
                  Login
                </a>
              </div>
              <div>
                <a className="text-white no-underline" href="/register">
                  SignUp
                </a>
              </div>
            </section>
          )}
        </div>

        <a className="no-underline" href="https://www.wealthfront.com/cash">
          Stocks
        </a>
        <div
          className="items-center relative font-semibold cursor-pointer"
          onMouseEnter={handleLearn}
          onMouseLeave={handleLearn}
        >
          Learn
          <ArrowDropDownIcon />
          {isLearn && (
            <section className=" z-[10000] absolute bg-[#333237aa] px-3 py-3 items-center rounded">
              <div className="mb-3">
                <a
                  className="bg-amber-500 hover:bg-[#FF8D3A] p-2 no-underline rounded text-white"
                  href="login"
                >
                  Login
                </a>
              </div>
              <div>
                <a className="text-white no-underline" href="/register">
                  SignUp
                </a>
              </div>
            </section>
          )}
        </div>
      </nav>

      <nav className="flex items-center gap-5 ">
        <a
          href="https://www.wealthfront.com/login"
          className="no-underline rounded-lg border p-3  hover:shadow-md"
        >
          Log in
        </a>
        <a
          href="https://www.wealthfront.com/start/account-type?intent=investing"
          className="no-underline rounded-lg p-3 hover:bg-amber-600 hover:shadow-md text-white bg-amber-500"
        >
          Get started
        </a>
      </nav>
    </div>
  );
};

export default Header;
