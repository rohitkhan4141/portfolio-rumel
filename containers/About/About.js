import Image from "next/image";
import React from "react";
import { BiAward, BiBriefcase, BiSupport } from "react-icons/bi";
import TitleSection from "../../components/TitleSection";

const About = () => {
  return (
    <section className='about section sec' id='about'>
      <TitleSection subtitle='My Intro' sectionName='About Me' />
      <div className='about__container container grid'>
        <Image
          src='https://drive.google.com/file/d/1La6Z6o3j8lr0X5VNk77g6WbwgWbqKV4z/view?usp=sharing'
          alt=''
          className='about__img'
          height={400}
          width={300}
        />
        <div className='about__data'>
          <div className='about__info'>
            <div className='about__box'>
              <BiAward className='about__icon' />
              <h3 className='about__title'>Experience</h3>
              <span className='about__subtitle'>2 Years Working</span>
            </div>

            <div className='about__box'>
              <BiBriefcase className='about__icon' />
              <h3 className='about__title'>Completed</h3>
              <span className='about__subtitle'>20 + projects</span>
            </div>

            <div className='about__box'>
              <BiSupport className='about__icon' />
              <h3 className='about__title'>Support</h3>
              <span className='about__subtitle'>Online 24/7</span>
            </div>
          </div>
          <p className='about__description'>
            I proclaim myself as a Frontend Heavy developer who knows backend. I
            help mostly startups with their online presence as they can be a
            growing force of their domain.
          </p>
          <a href='#contact' className='button'>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
