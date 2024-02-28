import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsLinkedin, BsMouse } from "react-icons/bs";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const Hero = () => {
  const { mode, handleTheme } = useThemeSwitcher();
  const [test, setTest] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTest(localStorage.getItem("mode"));
    }
  }, [test]);

  return (
    <section className="home section sec" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, Im</span>
          <h1 className="home__name">Rumel Hossain</h1>
          <h3 className="home__education">Frontend Developer</h3>
          <div className="home__buttons">
            {/* <a
              href="/Assets/resume-Mostakin Ahmed Khan.pdf"
              download
              className="button button--ghost"
            >
              Download-CV
            </a> */}
            <a href="#about" className="button">
              About Me
            </a>
          </div>
        </div>
        <div className="home__handle">
          <Image
            src="/Assets/test3.png"
            alt=""
            className="home__img"
            width={700}
            height={660}
          />
        </div>
        <div className="home__social">
          <Link href="https://www.linkedin.com/in/md-anjum-hossain-ba2865216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <a target="_blank" className="home__social-link">
              <BsLinkedin />
            </a>
          </Link>

          {/* <Link href="https://github.com/rohitkhan4141">
            <a target="_blank" className="home__social-link">
              <BsGithub />
            </a>
          </Link>

          <Link href="https://twitter.com/">
            <a target="_blank" className="home__social-link">
              <BsTwitter />
            </a>
          </Link> */}
        </div>
        <a href="#about" className="home__scroll">
          <BsMouse />
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
