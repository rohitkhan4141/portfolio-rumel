import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Mostakin</h1>
        <ul className='footer__list'>
          <li>
            <Link href='#about'>
              <a className='footer__link'>About</a>
            </Link>
          </li>
          <li>
            <Link href='#work'>
              <a className='footer__link'>Work</a>
            </Link>
          </li>
          <li>
            <Link href='#services'>
              <a className='footer__link'>Services</a>
            </Link>
          </li>
        </ul>
        <ul className='footer__social'>
          <Link href='https://www.linkedin.com/in/mostakinrohit/'>
            <a target='_blank' className='home__social-link'>
              <BsLinkedin />
            </a>
          </Link>

          <Link href='https://github.com/rohitkhan4141'>
            <a target='_blank' className='home__social-link'>
              <BsGithub />
            </a>
          </Link>

          <Link href='https://twitter.com/'>
            <a target='_blank' className='home__social-link'>
              <BsTwitter />
            </a>
          </Link>
        </ul>
        <span className='footer__copy'> All rights Reserved </span>
      </div>
    </footer>
  );
};

export default Footer;
