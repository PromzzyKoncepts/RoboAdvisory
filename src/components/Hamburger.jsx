import {useState} from "react"
import styled from "styled-components";
import Proptypes from "prop-types";
import {ArrowDropDown} from "@mui/icons-material";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  // background: #946d49;
  background: #18172b;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 4rem 2rem;
  position: fixed;
  z-index: 3000000;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 60%;
  }

  a {
    font-family: "Inter", sans-serif !important;
    font-size: 1rem;
    padding: 0.7rem 10px;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: left;
      border-bottom: none;
    }

    &:hover {
      color: #ff8d3a;
    }

    &.active {
      padding: 0.8rem 10px;
      background-color: #f97316;
      color: #200000;
      font-weight: 700;
      border-bottom: none;
      border-radius: 10px;
    }
    &.active svg {
      color: #200000 !important;
    }
  }

  .cat {
    font-family: "Inter", sans-serif !important;
    font-size: 1rem;
    padding: 0.8rem 10px;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: left;
      border-bottom: none;
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isCategories, setIsCategories] = useState(false);
  const handleCategories = () => setIsCategories((prev) => !prev);

  // Toggle the dropdown visibility when the dropdown icon is clicked
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownAbout = () => {
    setDropDown(!dropDown);
  };
  return (
    <StyledMenu open={open}>
      <a href="/" onClick={() => setOpen(false)}>
        Login
      </a>
      <a
        className="p-2 bg-amber-500 rounded"
        href="/about"
        onClick={() => setOpen(false)}
      >
        Get Started
      </a>
      <a href="/about#section_people" onClick={() => setOpen(false)}>
        Cash
      </a>
      <a href="/projects" onClick={() => setOpen(false)}>
        Bonds
      </a>
      <a href="/blog" onClick={() => setOpen(false)}>
        Stocks
      </a>

      <div className="relative cat " onClick={toggleDropdownAbout}>
        <div className="cursor-pointer text-slate-50">
          Automated Investing <ArrowDropDown />
        </div>
        {dropDown && (
          <section className="bg-[#7c542f1c] mt-2 rounded flex flex-col pt-4 w-full">
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

      <div className="relative cat" onClick={toggleDropdown}>
        <div className="cursor-pointer">
          Learn <ArrowDropDown />
        </div>
        {isDropdownOpen && (
          <section className=" bg-[#7c542f1c] mt-2 rounded flex flex-col pt-4 w-full">
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
          </section>
        )}
      </div>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 3%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  position: fixed;
  z-index: 300;
  color: #333;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#000" : "#000")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  .first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  .second-child {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  .third-child {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #18172b90;
  z-index: 2;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const Burger = ({ open, setOpen }) => (
  <div className="nav_menu">
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div className="first-child" />
      <div className="second-child" />
      <div className="third-child" />
    </StyledBurger>
  </div>
);

export { Burger, Menu, Overlay };
Burger.propTypes = {
  open: Proptypes.bool.isRequired,
  setOpen: Proptypes.func.isRequired,
};
Menu.propTypes = {
  open: Proptypes.bool.isRequired,
  setOpen: Proptypes.func.isRequired,
};
