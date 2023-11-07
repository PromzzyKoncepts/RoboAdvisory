import {  useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Burger, Menu, Overlay } from "./Hamburger";

const Header = () => {
  // const [open, setOpen] = useState(false);
  const [isCategories, setIsCategories] = useState(false);
  const [isLearn, setIsLearn] = useState(false);
  const handleCategories = () => setIsCategories((prev) => !prev);
  const handleLearn = () => setIsLearn((prev) => !prev);
    const [open, setOpen] = useState(false);


  return (
    <div className="w-full z-[3000]  fixed bg-white">
      <div className="flex justify-between py-3 w-10/12 m-auto items-center border-b">
        <header className="font-bold">
          <h1>
            <a
              className="text-4xl"
              href="https://www.wealthfront.com/investing"
            >
              Wealth<span className="">Vest</span>
            </a>
          </h1>
        </header>

        <div className="hamburger md:hidden">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <Overlay open={open} onClick={() => setOpen(false)} />
        </div>

        <nav className=" hidden md:flex gap-5">
          <a className="no-underline" href="https://www.wealthfront.com/cash">
            Cash
          </a>
          <a className="no-underline" href="https://www.wealthfront.com/cash">
            Bonds
          </a>

          <div
            className=" hidden md:block items-center relative font-semibold cursor-pointer"
            onMouseEnter={handleCategories}
            onMouseLeave={handleCategories}
          >
            Automated Investing
            <ArrowDropDownIcon />
            {isCategories && (
              <section className=" z-[10000] absolute text-slate-50 bg-[#333237] px-3 flex gap-2 flex-col w-[15rem] py-3 items-left rounded">
                <a onClick={() => setOpen(false)} href="/fashion/male">
                  Socially Responsible (SRI)
                </a>
                <a onClick={() => setOpen(false)} href="/fashion/female">
                  Retirement
                </a>
                <a onClick={() => setOpen(false)} href="/electronics">
                  College(529s)
                </a>
              </section>
            )}
          </div>

          <a
            className=" hidden md:block no-underline"
            href="https://www.wealthfront.com/cash"
          >
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
              <section className=" z-[10000] absolute bg-[#333237] px-3 py-3 items-center rounded">
                <div className="mb-3 w-[12rem] flex flex-col gap-2 text-slate-50">
                  <a onClick={() => setOpen(false)} href="/fashion/male">
                    Help Centers
                  </a>
                  <a onClick={() => setOpen(false)} href="/fashion/female">
                    Pricing
                  </a>
                  <a onClick={() => setOpen(false)} href="/accessories">
                    Tax-loss Harvesting
                  </a>
                  <a onClick={() => setOpen(false)} href="/electronics">
                    Historical Performance
                  </a>

                  <a onClick={() => setOpen(false)} href="/others">
                    Reviews
                  </a>
                </div>
              </section>
            )}
          </div>
        </nav>

        <nav className=" hidden md:flex items-center gap-5 ">
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
    </div>
  );
};

export default Header;
