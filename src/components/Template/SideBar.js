import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Hongda Lin</h2>
        <p><a href="mailto:linhongda77@gmail.com">linhongda77@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p><font size="+2">Hi! </font>
        I&apos;m Hongda Lin.
        A senior Computer Science and Engineering student at The Ohio State University.
        I&apos;m interested in Software Engineering, Computer Graphics and Game Development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Hongda Lin <Link to="/">Hongda&apos;s Portfolio</Link>.
        {/* <br />
        Forked from <a href="https://github.com/mldangelo/personal-site">MICHAEL D&apos;ANGELO&apos;s great work</a>. */}
      </p>
    </section>
  </section>
);

export default SideBar;
