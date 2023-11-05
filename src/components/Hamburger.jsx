import styled from "styled-components";
import Proptypes from "prop-types";
import { NavLink } from "react-router-dom";

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
  padding: 7rem 2rem;
  position: fixed;
  z-index: 3000000;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 55%;

  }

  a {
    font-family: 'Inter', sans-serif!important;
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
      border-bottom: 1px solid #ffffff25;
    }

    &:hover {
      color: #f4c26b;
    }

    &.active {
      background-color: #f4c26b; /* Add this line to style the active NavLink */
      color: #200000; /* Change the text color for the active NavLink */
      // width: 30%;
      font-weight: 700;
      border-bottom: none;
      border-radius:10px;
  }
`;

const Menu = ({ open, setOpen }) => (
  <StyledMenu open={open}>
    <a to="/" onClick={() => setOpen(false)}>
      Home
    </a>
    <a to="/about" onClick={() => setOpen(false)}>
      About Us
    </a>
    <a href="/about#section_people" onClick={() => setOpen(false)}>
      Members
    </a>
    <a to="/projects" onClick={() => setOpen(false)}>
      Projects
    </a>
    <a to="/blog" onClick={() => setOpen(false)}>
      Blogs
    </a>
  </StyledMenu>
);

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
