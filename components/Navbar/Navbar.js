import Link from "next/link";
import React from "react";
import {
  BiBook,
  BiBriefcaseAlt2,
  BiHomeAlt,
  BiMessageSquareMinus,
  BiMoon,
  BiSun,
  BiUser,
} from "react-icons/bi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const Navbar = () => {
  const { mode, handleTheme } = useThemeSwitcher();
  console.log(mode);
  return (
    <nav className="nav container">
      <Link href="#">
        <a className="nav__logo">Rumel Hossain</a>
      </Link>

      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="#home">
              <a className="nav__link home active-link">
                <BiHomeAlt />
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#about">
              <a className="nav__link about">
                <BiUser />
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#skills">
              <a className="nav__link skills">
                <BiBook />
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#work">
              <a className="nav__link work">
                <BiBriefcaseAlt2 />
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#contact">
              <a className="nav__link contact">
                <BiMessageSquareMinus />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Theme change --> */}
      {mode === "dark" ? (
        <BiMoon
          className="change-theme"
          id="theme-button"
          onClick={handleTheme}
        />
      ) : (
        <BiSun
          className="change-theme"
          id="theme-button"
          onClick={handleTheme}
        />
      )}
    </nav>
  );
};

export default Navbar;
