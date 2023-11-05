/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <ul className={Styles.menu}>
        <li className={Styles.menuItem}>
          <a className={Styles.menuLink} href="#">
            Home
          </a>
        </li>
        <li className={Styles.menuItem}>
          <a className={Styles.menuLink} href="#">
            About
          </a>
        </li>
        <li className={Styles.menuItem}>
          <a className={Styles.menuLink} href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;Krishna Soft Solutions</p>
    </footer>
  );
};

export default Footer;
